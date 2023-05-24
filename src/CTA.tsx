import CTAStyles from "./CTA.module.css";

const {
	lpPomBlock8,

	heroBg,
	myVideo,
	container,
	bannerContentContainer,
	bannerContent,
	subHeading,
	bannerForm,
	inputwrapper,
	clientLogos,
	logosContainer,
	bannerDisplay,
	mktoerror,
	mktoerrorarrowwrap,
	mktoerrorarrow,
	mktoErrorMsg,
} = CTAStyles;

function CTA() {
	return (
		<div className={lpPomBlock8}>
			<div className={heroBg}>
				<video
					autoPlay
					muted
					loop
					playsInline
					className={myVideo}
					preload="auto"
				>
					<source
						src="//res.cloudinary.com/spiralyze/video/upload/nTopology/7003_nTopology_Thermal_Management_Redesign/Hero-BG-video.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<div className={container}>
				<div className={bannerContentContainer}>
					<div className={bannerContent}>
						<p className={subHeading}>
							Get <span>good</span> great at additive!
						</p>
						<h1>
							Bring additive manufacturing to mainstream production with nTop 4!
						</h1>
						<ul>
							<div>
								<li>
									<h5>Field optimization</h5>
									<p>
										Generate highly engineered parts that turn complexity into
										your competitive advantage.
									</p>
								</li>
								<li>
									<h5>Implicit interop</h5>
									<p>
										Transfer even your most complex designs in megabytes, not
										gigabytes.
									</p>
								</li>
							</div>
							<div>
								<li>
									<h5>nTop automate</h5>
									<p>
										Multiply the impact of your engineers with programmatic
										design automation at scale.
									</p>
								</li>
								<li>
									<h5>Customer success programs</h5>
									<p>
										Work together with our experts to apply nTop to your
										business.
									</p>
								</li>
							</div>
						</ul>
						<div className={bannerForm}>
							<div className={inputwrapper}>
								<form>
									<input
										type="email"
										name="email"
										placeholder="Enter your Email"
									/>
								</form>
								<button type="button">Get a demo</button>
							</div>
							<div
								className={mktoerror}
								style={{ right: "51.5px", bottom: "-35px" }}
							>
								<div className={mktoerrorarrowwrap}>
									<div className={mktoerrorarrow}>{}</div>
								</div>
								<div
									id="ValidMsgFirstName"
									role="alert"
									tabIndex={-1}
									className={mktoErrorMsg}
								>
									This field is required.
								</div>
							</div>
						</div>
					</div>
					<div className={bannerDisplay}>
						<img
							src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/8002/desktop-lattice-types.png"
							alt="Lattice Structure"
						/>
					</div>
				</div>

				<div className={clientLogos}>
					<div className={logosContainer}>
						<img
							src="//res.cloudinary.com/spiralyze/image/upload/ntopology/8002/logos-aerojet.svg"
							alt="Aerojet"
						/>
						<img
							src="//res.cloudinary.com/spiralyze/image/upload/ntopology/8002/logos-gm.svg"
							alt="GM"
						/>
						<img
							src="//res.cloudinary.com/spiralyze/image/upload/ntopology/8002/logos-siemens_energy.svg"
							alt="Siemens Energyy"
						/>
						<img
							src="//res.cloudinary.com/spiralyze/image/upload/ntopology/8002/logos-si_bone.svg"
							alt="Si-Bone"
						/>
						<img
							src="//res.cloudinary.com/spiralyze/image/upload/ntopology/8002/logos-wilson.svg"
							alt="Wilson"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CTA;
