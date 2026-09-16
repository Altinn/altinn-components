import{a7 as t,c as o}from"./iframe-DK26OyRD.js";import{S as s}from"./Handshake-CjNH_Q7i.js";import{S as e}from"./Bell-CCVcX7Po.js";import{S as n}from"./Hashtag-CB5GmuyA.js";import{S as p}from"./Files-BH3wPXtj.js";import{A as l}from"./AccountListItem-DxxW-YTY.js";import{A as m}from"./AccountListItemDetails-CxYQJWMA.js";import{L as c}from"./List-CCKc6phr.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DdxVCvKn.js";import"./Input-DpIg0EIy.js";import"./Avatar-BffuF9Fo.js";import"./AvatarGroup-jikhFLm8.js";import"./Badge-DJCWLgdY.js";import"./Tooltip-FdBCCTre.js";import"./Heading-KMM5EtCs.js";import"./useHighlightedText-dRdWwo97.js";import"./ChevronUp-H846LjQF.js";import"./ChevronDown-BXSVxDRn.js";import"./ChevronRight-CgtnVZss.js";import"./HeartFill-B6rWCuOk.js";import"./ContextMenu-OoWwKfGw.js";import"./useDropdownMenuController-3-_gSr8-.js";import"./Dropdown-DKc7uAuj.js";import"./SearchField-Mgah0vbC.js";import"./MagnifyingGlass-BHP7DrS9.js";import"./FieldBase-BNgybH8j.js";import"./Typography-DLY6k0s2.js";import"./Field-CP0Ba6gq.js";import"./Label-BicRbD_9.js";import"./useMenu-0kp9W_Tl.js";import"./MenuListItem-CCTq2KJp.js";import"./MenuListDivider-DYsLXAeP.js";import"./MenuListHeading-BjuGDozt.js";import"./MenuItem-X5ltzLjc.js";import"./ItemMedia-eL3WoD14.js";import"./Checkmark-CX2TKrXP.js";import"./ItemLabel-DbTlGETX.js";import"./ItemControls-DNRsDyv1.js";import"./InformationSquare-f4aulv5D.js";import"./MenuElipsisHorizontal-CE-njAYU.js";import"./Section-5gLqA0oM.js";import"./Flex-Bsp6DeeI.js";import"./ButtonGroup-3GFoI2vi.js";import"./Divider-BVXfMNk1.js";import"./SettingsItem-WSPp-5ar.js";import"./SettingsItemBase-BP6tVNdJ.js";import"./ItemBase-C7L84IL-.js";import"./ItemLink-DFds8MDQ.js";import"./SettingsModal-CFM_KvJS.js";import"./ModalBody-LJkI2hmG.js";import"./ButtonIcon-prTPeC3u.js";import"./ButtonLabel-DONh2DdN.js";import"./AccountOrganization-DCd_2DRX.js";import"./Byline-c7qUJLHL.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
