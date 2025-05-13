import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        //title, categoryID, sku, quantity, unitID, brandId, supplierID, buyingPrice, reorderPoint, imageUrl, Weight, taxRate, description, notes
        const data =
        await request.json();
        console.log(data);
        return NextResponse.json(data);
        } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create an Item",
            },
            {
                status: 500,
            }
            );
        }
    }
