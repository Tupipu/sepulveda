import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="">
          <Image
            className="w-100"
            width={200}
            height={100}
            src="/logo.webp"
            alt="Sepulveda Escrow Corporation"
          />
        </div>
        <div className="flex w-[50vw] justify-between">
          <div className="flex gap-2">
            <div>
              <h3>Contact information</h3>
              <p>
                10550 Sepulveda Blvd, 105,
                <br />
                Mission Hills, CA 91345,
                <br />
                United States
                <br />
                <a href="tel:18188981831">(818) 898-1831</a>
              </p>
            </div>
            <div>
              <h3>Quick links</h3>
              <p>
                <a href="#services">Escrow services</a>
                <br />
                <a href="#about">About our team</a>
                <br />
                <a href="#contact">Contact us</a>
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.4489467073845!2d-118.46934602427464!3d34.262602273078585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29066cd4cf391%3A0xc753f29e8c4c89f6!2s10550%20Sepulveda%20Blvd%20%23105%2C%20Mission%20Hills%2C%20CA%2091345%2C%20USA!5e0!3m2!1sen!2sza!4v1793724695742!5m2!1sen!2sza"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="max-w-80 max-h-60"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Sepulveda Escrow Corporation. All rights reserved.
      </div>
    </footer>
  );
}
