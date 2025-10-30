"use client"
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
const EditUser = () => {
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription asChild>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    )
}

export default EditUser