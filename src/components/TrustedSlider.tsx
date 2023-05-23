

const TrustedSlider = () => {
    return (
        <div className="trusted__slider">
        <div className="container">
          <h3 style={{ color: 'black' }}>Trusted by <br className="mobileSpace" />world-class teams</h3>
          <div className="slider__container" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="slider__content">
              <div className="content__container firstSlide">
                <div className="content__content">
                  <p>
                    â€œWith nTopology, we created a powerful and unique additive
                    design. It wouldnâ€™t be possible to create such a component
                    with a traditional CAD system.â€
                  </p>
                  <div className="author__team">
                    <p>Martin Blanke</p>
                    <p>Project Engineer, DMG MORI</p>
                  </div>
                </div>
              </div>
              <div className="content__container">
                <div className="content__content">
                  <p>
                    â€œThis product has been hugely successful for us, and this is
                    definitely in part due to the lattice structure that was
                    created by nTopology.â€
                  </p>
                  <div className="author__team">
                    <p>Beth Stuart</p>
                    <p>Senior Design Engineer, SI-BONE</p>
                  </div>
                </div>
              </div>
              <div className="content__container">
                <div className="content__content">
                  <p>
                    â€œnTopology is different from any other design tools Iâ€™ve
                    used before. It remapped the way I think about 3D printing.
                    Becoming more familiar with the software has increased my
                    Additive Design IQ.â€
                  </p>
                  <div className="author__team">
                    <p>Ross Brown</p>
                    <p>AM Engineer, Marrotta Controls</p>
                  </div>
                </div>
              </div>
              <div className="content__container">
                <div className="content__content">
                  <p>
                    â€œnTopology was already a very robust and first-of-its-kind
                    tool. The new latticing technology is a major upgrade compared
                    to anything else Iâ€™ve seen in the past.â€
                  </p>
                  <div className="author__team">
                    <p>Chelsea Cummings</p>
                    <p>Application Engineer, The Barnes Group Advisors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export { TrustedSlider }