import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={e => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll"
  >
    <div style={{ height: "400vh" }}>
      <div class="dot">
        <h1>Intro to </h1> 
        <h1>G-102</h1>
        In G-102, 
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>headphone</h1>
        Headphones are a pair of small loudspeaker drivers worn on or around the
        head over a user's ears.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>rocket</h1>A rocket (from Italian: rocchetto,
        lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft, aircraft
        or other vehicle use to obtain thrust from a rocket engine.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>turbine</h1>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek
        τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary
        mechanical device that extracts energy from a fluid flow and converts it
        into useful work.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>table</h1>A table is an item of furniture with a flat top and one or
        more legs, used as a surface for working at, eating from or on which to
        place things.[1][2]
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>NFT</h1>A laptop, laptop computer, or notebook computer is a small,
        portable personal computer (PC) with a screen and alphanumeric keyboard.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>Roadmap</h1>
        <p>
          <div class="timeline">
            <div class="container right">
              <div class="content">
                <p>Q4 2021</p>
                <li>Launch of official website</li>
                <li>Release of game trailer</li>
                <li>Presale and IDO</li>
                <li>Contract Auditing</li>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <p>Q1 2022</p>
                <li>Land and NFT sale</li>
                <li>Private alpha and beta test</li>
                <li>Release of Farm and PVE mode</li>
                <li>Public beta test</li>
                <li>Staking</li>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <p>Q2 2022</p>
                <li>End of Beta Testing</li>
                <li>PVP mode</li>
                <li>Betting system</li>
                <li>Launch mobile app</li>
                <li>Intensive marketing</li>
              </div>
            </div>
            <div class="container right">
              <div class="content">
                <p>Q3 2022</p>
                <li>Seasonal tournament</li>
                <li>New Season Character</li>
                <li>Launch team PVP mode</li>
                <li>Development of AR and VR</li>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
