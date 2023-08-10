import connectToDatabase from "@/app/utils/connectDB";
import { NextResponse } from "next/server";


export async function GET(req) {
    const slug = req.nextUrl.searchParams.get("slug");
    try {
        const db = await connectToDatabase();
        const collection = db.collection('products-list');
        console.log(slug);

        const document = await collection.findOne({ slug: slug });

        if (!document) {
            return NextResponse.json({ message: 'Document not found' }, { status: 404 });

        }

        return NextResponse.json(document, { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }




}