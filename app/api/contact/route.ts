import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Create contact document
    const contactData = {
      name,
      email,
      phone: phone || "",
      message,
      createdAt: new Date(),
      status: "new", // new, read, replied
    };

    // Insert into contacts collection
    const result = await db.collection("contacts").insertOne(contactData);

    return NextResponse.json(
      {
        success: true,
        message: "Contact message saved successfully",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to save contact message" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { db } = await connectToDatabase();

    // Fetch all contacts (optional - for admin to view messages)
    const contacts = await db
      .collection("contacts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
