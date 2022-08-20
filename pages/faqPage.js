import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../styles/home.module.css";
import lefticon from "../Media/icons/lefticon.png";
import Link from "next/link";
import Image from "next/image";
export default function faqPage() {
  return (
    <div className={styles.faqspage}>
      <div>
        <Link href="/">
          <a>
            <div className="flex items-center gap-4 px-5 pt-3 ">
              <Image src={lefticon} alt="" />
              <p className="text-2xl font-medium " style={{ color: "#333333" }}>
                সচরাচর জিজ্ঞাসা
              </p>
            </div>
          </a>
        </Link>
      </div>
      <div className="mt-6">
        <Accordion className=" bg-white border-2" defaultExpanded="true ">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className=" flex justyfy-between"
          >
            <Typography>কুইজার্স রিওয়ার্ড কি? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              কুইজার্স রিওয়ার্ড ব্যবহারকারী হিসাবে আমি কিভাবে উপকৃত হবো ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
