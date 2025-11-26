import React from "react";
import Image from "next/image";

const logos = [
  {
    alt: "Relume logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH_DtXCEdWmU2omSqOPplynlhDEWbxQKgSk1tHI2qgVOI-SIqZFERBiCDfy-_haYC3_DeB-tPILRB1Q_jvI94F2vf9p0Vhp-0tPrmvhnqLSMqG0p51Vzmc9TJYLlpOVVcA6WKkoBch-CL527nYKgBu0R4Wi0giBc51C0yZvpYnqEg0MCDi0-IaCFdypH-pOUVzQGwpYLV4NlTENn_auJw5qihuxmt9rGsaHSaBX26OdbfUY8pAvsGJQnRed6IdriocUtL3-ex5Usk",
  },
  {
    alt: "Webflow logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB25HoKxHeetJVhKDe5MAybogNuFJXg_jO2r-izGBwQvbhNIe6dOSaaOOCDewdbJn9vjFb8mnbFnQ7L3a0-tHs2SxMFaRkgvWAXeCDohWJrXzA0gOtClf3QpXwQh2s9Ws6fV5sBe2MT5nW8eJFHVyUcxGupmhzOfvY-ukDEfidFaRSvnQMbcEvpTmGSZkx3b4biPcxUg5KzmVxr5yTI0t-wnH1LUjW2IC8XPLbkdZCS9m1BuORO57n5PhhThIuyWTdPu5T2PzN71EE",
  },
  {
    alt: "Relume logo 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmNmoApf5XknK-y7mlGIUJijZvpHMElaxCNKeD2uF9O_v2EXDqF-jv_Dt8EPg-j-VfHcWvMJmQg7WII84nhh1V04bL7LaCL4xtzy8OFLQoZGbgHpQtgIE1j1zRBLrhto7EBdaKuQSiBnrXA69ROnnc4PKS14wsIa6TKGHmdgFUckJCd1L-dBKfsPXfv784-5oweRmbyP8btpqz3PPwkXERNtazV3lWjA1yogVEmX-2glYBULv_IUzJc2UME4PX7DamR0oTGwNcZT4",
  },
  {
    alt: "Webflow logo 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuFf-jZHarvDFaN7uWHGfoGoZs_RncdsemSH56WpgWyeEPy3LUs1hwK0EuBrMFko3xdVgHI9Tp8dUzgEyoUVrTfkoR0soY3KFxPErw_aUKMTyK-v21wfQjFPmAZI4_dTaC2r5VtfguUiL0zPOobCzR0jMuIfB6ec8NAgTIOWObXljGIoAB4AED_akSSOpbcO-dHjoGr6GANPzmKpRsUAa_e7GsGHp9cOOS917Nvy9NODmNVPo8snh0M54P22DpIkV9s_wE30hRtHo",
  },
  {
    alt: "Relume logo 3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW2tMOadvsVRGgMtzkj5pDoNVZBP1Tty9ylFG63QidxT8rEiuOxcxiLMfo98G4_-CbWJ7zD2VFRUyuG_ziqF3AA4NuTj-KN27HrZmgM6U51aYro0KZAXn3mJR-M19Bag0B8IRHYNgMrb6dBDau9GXd1SERMxPjY7Izo3Ftctnyew5Wuxyy8ibTeJRyllkvzOuEkhHOO8w9zogo0o8JPN5eS0_v7ItZnc0JDo2w6s1bKjT4QkJGMBMlvU9MEAzw4rjwJU3Rj73QzBs",
  },
];

export default function TrustedBy() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <h4 className="text-sm font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400">
            Trusted by leading companies
          </h4>
          <div className="w-full flex justify-center items-center gap-8 md:gap-16 flex-wrap grayscale opacity-60 dark:invert dark:opacity-80">
            {logos.map((logo, index) => (
              <div key={index} className="h-6 w-auto">
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  width={100}
                  height={24}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}