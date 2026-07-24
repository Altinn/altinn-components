import{a7 as t,c as o}from"./iframe-Byxtd80g.js";import{S as s}from"./Handshake-DxzwEYyZ.js";import{S as e}from"./Bell-C0dVVEnv.js";import{S as n}from"./Hashtag-tuK-2dVo.js";import{S as p}from"./Files-CSDns4fJ.js";import{A as l}from"./AccountListItem--jp-THH6.js";import{A as m}from"./AccountListItemDetails-Da-T4_WT.js";import{L as c}from"./List-CP--feze.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-NChXZGPS.js";import"./Input-De6ZM0cy.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./Heading-MBvMqbLo.js";import"./useHighlightedText-Cf3y_8YK.js";import"./ChevronUp-DVYZxjEC.js";import"./ChevronDown-Bl8PHeKm.js";import"./ChevronRight-Cr__dFRw.js";import"./HeartFill-M1FbN85e.js";import"./ContextMenu-Dlglwr41.js";import"./useDropdownMenuController-Ci6S68lA.js";import"./Dropdown-BDuW_1gv.js";import"./SearchField-BrxR5w_Y.js";import"./MagnifyingGlass-DByXWuC9.js";import"./FieldBase-BpV90x03.js";import"./Typography-B9U7pBH4.js";import"./Field-D8NU1WP1.js";import"./Label-BN9gSRd7.js";import"./useMenu-ClfrC7iO.js";import"./MenuListItem-rQlT5DX8.js";import"./MenuListDivider-CDp90hQ9.js";import"./MenuListHeading-laWT1ysP.js";import"./MenuItem-BIjlfqyX.js";import"./ItemMedia-DRrUuj39.js";import"./Checkmark-oERC_EvH.js";import"./ItemLabel--xs2hbXq.js";import"./ItemControls-DrAhbY6n.js";import"./InformationSquare-CfrYT55Z.js";import"./MenuElipsisHorizontal-DpIat2lo.js";import"./Section-BiXimCdL.js";import"./Flex-DvsQk1i3.js";import"./ButtonGroup-DCrOTCLv.js";import"./Divider-B7BfHpuQ.js";import"./SettingsItem-ddkJyxoq.js";import"./SettingsItemBase-2DYeJ-V9.js";import"./ItemBase-qkA6J1-6.js";import"./ItemLink-C9iiSAim.js";import"./SettingsModal-WDsBlCXN.js";import"./ModalBody-Cv8Rj8gS.js";import"./ButtonIcon-CXrG2Sb4.js";import"./ButtonLabel-7acsPO9C.js";import"./AccountOrganization-CtUYR0dQ.js";import"./Byline-Cb3cKld6.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
