import React from "react"
import { supabase } from "./supabaseClient"
import { useNavigate } from "react-router-dom"

export default function LogoutButton() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      alert("Logout gagal: " + error.message)
    } else {
      alert("Logout berhasil!")
      navigate("/login") // redirect ke login setelah logout
    }
  }

  return (
    <button onClick={handleLogout} style={{
      padding: "10px 16px",
      fontSize: 16,
      cursor: "pointer",
      borderRadius: 8,
      backgroundColor: "#f44336",
      color: "white",
      border: "none"
    }}>
      Logout
    </button>
  )
}
