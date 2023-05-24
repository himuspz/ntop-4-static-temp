import CTAStyles from "./CTA.module.css";
import CapabilitiesStyle from "./Capabilities.module.css";

const { container } = CTAStyles;
const {
	capabilities,
	capabilitiesContainer,
	highlighted,
	boxesPlacement,
	boxesSection,
} = CapabilitiesStyle;

function Capabilities() {
	return (
		<div className={capabilities}>
			<div className={container}>
				<div className={capabilitiesContainer}>
					<div className={highlighted}>
						<h2>What are the new capabilities of nTop 4?</h2>
					</div>
					<div className={boxesPlacement}>
						<div className={boxesSection}>
							<div>
								<h5>Design: Field optimization</h5>
								<span>
									<p>
										Field Optimization is a new generative design technology
										that enables you to solve today’s most complex engineering
										problems.
									</p>
									<p>
										Field Optimization layers a multi-scale and multi-objective
										optimization engine on top of nTop’s core technology,
										resulting in a new design tool that is both extremely
										powerful and easy to implement.
									</p>
								</span>
							</div>
							<div>
								<h5>Integrate: Implicit interop</h5>
								<span>
									<p>
										Implicit Interop allows you to transfer design data between
										nTop, manufacturing, CAD, and CAE software without meshing
										using a new file format that is smaller file sizes and at
										lossless precision.
									</p>
									<p>
										The new is the first-of-many Implicit Interop software
										connections.
									</p>
								</span>
							</div>
						</div>
						<div className={boxesSection}>
							<div>
								<h5>Scale: nTop automate</h5>
								<span>
									<p>
										nTop Automate enables users to execute nTop workflows at
										scale through a programmatic environment.
									</p>
									<p>
										In addition to the Windows deployment, nTop 4 introduces
										nTop Automate for Linux, unlocking economic cloud computing
										and enabling the use of all available on-premise HPC
										resources.
									</p>
								</span>
							</div>
							<div>
								<h5>Adopt: Customer success programs</h5>
								<span>
									<p>
										In addition to the best tools for the job, nTop offers
										programs to accelerate adoption in organizations of any
										size.
									</p>
									<p>
										nTop Accelerate is a range of one-to-one training services,
										custom workshops, and design sprints to help you best meet
										your program objectives and maximize your team’s impact.
									</p>
									<p>
										nTop’s onboarding programs — like nTop Learn, our online
										learning center — ensure that you will start delivering
										value as fast as possible.
									</p>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Capabilities;
