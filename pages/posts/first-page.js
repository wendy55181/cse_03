import Head from 'next/head';
import Link from 'next/link';

export default function FirstPage() {
  return (
    <>
    <Head>
        <title>FirstPage_by.JL</title>
    </Head>
    <body>
      <h1>Welcome to First_Page</h1>
      <h5>
        <Link href="/">Click here to go back home</Link>
      </h5>

      <p>This is a page made my Jiwoo Lee. This is one of her assignments for the class <strong><u>'Introduction to Computer Science'</u></strong></p>
      <p>Here's a photo of her</p>
      <img src="/picofme.jpg" alt="This is me when I was 12." width="150" height="150"></img>
      <p>Her favorite class in Hanyang University is <strong><u>'Introduction to Computer Science'</u></strong></p>
      <p>Why? Because</p>

      <ol>
          <li>Professor Young looks like her cousin brother.</li>
          <li>Gives challanging yet doable(?) tasks</li>
          <li>Teaches in English!</li>
      </ol>
    </body>
    </>
  );
}