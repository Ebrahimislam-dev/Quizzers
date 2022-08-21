import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../styles/common.module.css";
import lefticon from "../Media/icons/lefticon.png";
import Link from "next/link";
import Image from "next/image";

export default function faqPage() {
  return (
    <div className={styles.faqspage}>
      <div>
        <Link href="/pointReward">
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
      <div className="mt-6 mb-24 mx-6">
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className=" font-medium text-sm">
              কুইজার্স রিওয়ার্ড কি?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className=" flex justyfy-between"
          >
            <Typography className=" font-medium text-sm">
              কুইজার্স রিওয়ার্ড ব্যবহারকারী হিসাবে আমি কিভাবে উপকৃত হবো ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className=" flex justyfy-between"
          >
            <Typography className=" font-medium text-sm ">
              আমি কিভাবে পয়েন্ট অর্জন করব ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className=" flex justyfy-between"
          >
            <Typography className=" font-medium text-sm ">
              ব্যবহারযোগ্য পয়েন্ট কী ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className=" flex justyfy-between"
          >
            <Typography className=" font-medium text-sm ">
              ব্যবহারযোগ্য পয়েন্ট এবং অর্জিত পয়েন্ট কি একই?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className=" flex justyfy-between"
          >
            <Typography className=" font-medium text-sm ">
              প্রগ্রেস বার / অগ্রগতি বার কী ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className=" flex justyfy-between"
          >
            <Typography className=" font-medium text-sm ">
              উচ্চ লেভেলে আমি কী সুবিধা পাব ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className=" flex justyfy-between"
          >
            <Typography className=" font-medium text-sm ">
              আমি কিভাবে পরবর্তী লেভেলে যেতে পারি ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ color: " #2E3E5C" }}
          className=" bg-white shadow-md p-3 flex flex-col justyfy-between "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className=" flex justyfy-between"
          >
            <Typography className=" font-medium text-sm ">
              আমি কি আমার বর্তমান লেভেল থেকে নিচের লেভেলে ফিরে যেতে পারি ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" font-normal text-xs">
              আপনি কুইজার্স নিয়মিত ব্যবহার করে পয়েন্ট অর্জন করতে পারবেন এবং
              আপনার ব্যবহারযোগ্য পয়েন্ট ব্যয় করে দারুন সব রিওয়ার্ড পেতে পারেন
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
