"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import Headder from "./components/Headder";
import styles from "./not-found.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Headder />
      <div className={styles.pageWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.main_wrapper}>
            <div className={styles.main}>
              <div className={styles.antenna}>
                <div className={styles.antenna_shadow}></div>
                <div className={styles.a1}></div>
                <div className={styles.a1d}></div>
                <div className={styles.a2}></div>
                <div className={styles.a2d}></div>
                <div className={styles.a_base}></div>
              </div>
              <div className={styles.tv}>
                <div className={styles.cruve}>
                  <svg
                    className={styles.curve_svg}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 189.929 189.929"
                    xmlSpace="preserve"
                  >
                    <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13 C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"></path>
                  </svg>
                </div>
                <div className={styles.display_div}>
                  <div className={styles.screen_out}>
                    <div className={styles.screen_out1}>
                      <div className={styles.screen}>
                        <span className={styles.notfound_text}>NOT FOUND</span>
                      </div>
                      <div className={styles.screenM}>
                        <span className={styles.notfound_text}>NOT FOUND</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.lines}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                  <div className={styles.line3}></div>
                </div>
                <div className={styles.buttons_div}>
                  <div className={styles.b1}>
                    <div></div>
                  </div>
                  <div className={styles.b2}></div>
                  <div className={styles.speakers}>
                    <div className={styles.g1}>
                      <div className={styles.g11}></div>
                      <div className={styles.g12}></div>
                      <div className={styles.g13}></div>
                    </div>
                    <div className={styles.g}></div>
                    <div className={styles.g}></div>
                  </div>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.base1}></div>
                <div className={styles.base2}></div>
                <div className={styles.base3}></div>
              </div>
            </div>
            <div className={styles.text_404}>
              <div className={styles.text_4041}>4</div>
              <div className={styles.text_4042}>0</div>
              <div className={styles.text_4043}>4</div>
            </div>
          </div>

          <div className="mt-7">
            <div className={styles.actionBlock} >
            <p className="text-white/60 text-[15px] md:text-[17px] mb-2">
              The page you were looking for could not be found
            </p>
            <p className="text-white/40 text-[13px] mb-6">
              You can go back or return to homepage
            </p>
            <div className="flex md:gap-3 gap-2 flex-wrap justify-center">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 px-5 py-2.5 text-[13px] rounded-full text-black
            bg-[linear-gradient(90deg,#ECECEC,#898989)]
            shadow-[0_10px_30px_rgba(255,255,255,0.1)]
            hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]
            transition-all duration-300 cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
              <Link
                href="/"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-black
            bg-[linear-gradient(90deg,#ffb056,#ff6b00)]
            shadow-[0_10px_30px_rgba(255,107,0,0.3)] text-[13px]
            hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,107,0,0.5)]
            transition-all duration-300">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
