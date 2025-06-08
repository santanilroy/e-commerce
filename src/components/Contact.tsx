import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted: ", form);
    alert("Message sent! (You can connect this to backend API)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-gray-600">
            We'd love to hear from you! Reach out to us with questions,
            feedback, or anything else.
          </p>

          <div className="flex items-center gap-4 text-gray-700">
            <Mail className="w-5 h-5" />
            <span>support@ShopShpere.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <Phone className="w-5 h-5" />
            <span>+91 7439273941</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <MapPin className="w-5 h-5" />
            <span>Fashion Street, Kolkata, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
