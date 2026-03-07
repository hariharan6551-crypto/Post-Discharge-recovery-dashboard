"use client";

import { useState } from "react";

export default function UploadPage() {
  const [message, setMessage] = useState("");

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setMessage(`Uploaded ${data.records} records`);
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Data</h1>

      <input type="file" onChange={handleUpload} />

      <p>{message}</p>
    </div>
  );
}