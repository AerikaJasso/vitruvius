const Tooltips = {
  template: /*html*/`
    <div class="inner-container">
      <h2>Tooltips</h2>
      <p>
        The Vitruivius tooltip provides interactive textual information for graphical elements.
      </p>
      <div class="tooltip-vp-button-group v-flex">

      <vp-button type="default" data-vp-tooltip="true" data-vp-tooltip-message="TOP" data-vp-tooltip-position="top" data-vp-tooltipid='tooltip1'>
        Tooltip top message
      </vp-button>

      <vp-button type="default" data-vp-tooltip="true" data-vp-tooltip-message="LEFTjhfdklajklfjkalsjkflsadkl;fklasklfaskldfsjfkljsdklfjklfadfafdasfsadfasfdsadfasdfasdfasdfsdfasdfsadfsadfsadfasdfsajsadf" data-vp-tooltip-position="left" data-vp-tooltipid='tooltip2'>
        Tooltip left message
      </vp-button>

      <vp-button type="default" data-vp-tooltip="true" data-vp-tooltip-message="RIGHT" data-vp-tooltip-position="right" data-vp-tooltipid='tooltip3'>
        Tooltip right message
      </vp-button>

      <vp-button type="default" data-vp-tooltip="true" data-vp-tooltip-message="BOTTOM" data-vp-tooltip-position="bottom" data-vp-tooltipid='tooltip4'>
        Tooltip bottom message
      </vp-button>

      </div>
      
    </div>

  `
,
  mounted() {
    new Tooltip();
  }

}