var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-DvHKorxQ.js";import{S as l}from"./Handshake-D6pTd0Ga.js";import{S as a}from"./Bell-CYRmg0LU.js";import{S as m}from"./Hashtag-BXCZqVed.js";import{S as c}from"./Files-BrzR87tH.js";import{A as g}from"./AccountListItem-PDbt9QnN.js";import{A as d}from"./AccountListItemDetails-Dp2dlR06.js";import{L as u}from"./List-CM1tbUBe.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-B8YJla-3.js";import"./Input-Bgd0BScM.js";import"./Avatar-Cz88DWwK.js";import"./AvatarGroup-DG05vr_h.js";import"./Badge-DzOSp-VL.js";import"./Tooltip-B5VcyW21.js";import"./Heading-Cl1YAvvB.js";import"./useHighlightedText-BTXbLxcU.js";import"./ChevronUp-CNwAnotn.js";import"./ChevronDown-CIQHUQdq.js";import"./ChevronRight-BUHnh-Yw.js";import"./HeartFill-DNqsa6JA.js";import"./ContextMenu-kuvKn8Xt.js";import"./useDropdownMenuController-IkMO0B8E.js";import"./Dropdown-CZm18rgm.js";import"./SearchField-BU96PyeS.js";import"./MagnifyingGlass-BXEQkXVn.js";import"./MenuListItem-sxF_Fdo2.js";import"./MenuListDivider-CVAdbPBV.js";import"./MenuItem-BKT_WeeP.js";import"./CheckboxUncheckedIcon-DfhKN-kl.js";import"./RadioUncheckedIcon-02hVvrUJ.js";import"./ItemMedia-D3TRsre4.js";import"./ItemLabel-BPqR0X1V.js";import"./ItemControls--z7ByJD8.js";import"./FieldBase-BZwhXyPC.js";import"./Typography-CvxYC9sf.js";import"./Field-DZglScdH.js";import"./Label-bDy8LqNB.js";import"./useMenu-DmIIMIa0.js";import"./InformationSquare-dQI1I0JD.js";import"./Section-C_0CdUSc.js";import"./Flex-DGnnEuV7.js";import"./ButtonGroup-HA7R6Ya1.js";import"./Divider-D-6a6wuG.js";import"./SettingsItem-BLeyxx78.js";import"./SettingsItemBase-Mas3T7p4.js";import"./ItemBase-CLKLcNMq.js";import"./ItemLink-rN7vy6V2.js";import"./SettingsModal-C5N8mowt.js";import"./ModalBody-C1im2bkm.js";import"./ButtonIcon-Ddz6f75V.js";import"./ButtonLabel-PIYJX3px.js";import"./AccountOrganization-CuhrmmjD.js";import"./Byline-B9mjeQUZ.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,bt as __namedExportsOrder,xt as default};
