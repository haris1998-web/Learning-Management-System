import {Button} from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
    return (
        <Link href={"/teacher/create/"}>
            <Button>
                New Course
            </Button>
        </Link>
    );
};

export default CoursesPage;