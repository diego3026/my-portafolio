export default function WaveBackground() {
    return (
        <div className="w-full bg-[#292929] overflow-hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="w-full h-[120px] rotate-180"
            >
                <path
                    fill="#111111"
                    fillOpacity="1"
                    d="M0,128L40,128C80,128,160,128,240,138.7C320,149,400,171,480,165.3C560,160,640,128,720,138.7C800,149,880,203,960,224C1040,245,1120,235,1200,213.3C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}
