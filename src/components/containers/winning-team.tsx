import { Button } from "../ui/button";

export default function WinningTeam() {
    return (
        <section className="min-h-[70vh] lg:min-h-[90vh] w-screen overflow-hidden p-8 flex items-center justify-center text-center  bg-no-repeat bg-cover bg-center text-whyte " style={{
            backgroundImage: `url('images/winning.jpeg')`,
            backgroundColor: "#000",
        }}>
            <div className="flex flex-col max-w-2xl gap-8 ">
                <h2>Are you a winner?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
                <Button>
                    Join The Winning Team
                </Button>
            </div>
        </section>
    );
}