import{a7 as t,c as o}from"./iframe-Dai1liu3.js";import{S as s}from"./Handshake-FtZQREap.js";import{S as e}from"./Bell-2PrMijso.js";import{S as n}from"./Hashtag-DmPsh9Eo.js";import{S as p}from"./Files-b9PdSND6.js";import{A as l}from"./AccountListItem-E91H3q8E.js";import{A as m}from"./AccountListItemDetails-Drd4mbfz.js";import{L as c}from"./List-Ti8VfHa-.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-GmGusVG_.js";import"./Input-4lJD8g37.js";import"./Avatar-BHjgyLeH.js";import"./AvatarGroup-BdaWfTQE.js";import"./Badge-CiXuPxpG.js";import"./Tooltip-Cf7V9gL4.js";import"./Heading-DmQEE02y.js";import"./useHighlightedText-DBCcFNzk.js";import"./ChevronUp-BdWuuKpV.js";import"./ChevronDown-BKPL2jIp.js";import"./ChevronRight-B3RrQIZJ.js";import"./HeartFill-CVU2gC4U.js";import"./ContextMenu-D6E4TjJ4.js";import"./useDropdownMenuController-D6ah7-Cm.js";import"./Dropdown-qfadPHLV.js";import"./SearchField-RxPS0VwN.js";import"./MagnifyingGlass-Cr52GLsM.js";import"./FieldBase-CqsxpTvX.js";import"./Typography-DKU5x7uE.js";import"./Field-BZ_6UwHR.js";import"./Label-DZ5hnW4T.js";import"./useMenu-Cn8ytCIG.js";import"./MenuListItem-CU8Yw_FM.js";import"./MenuListDivider-wVnt0d0h.js";import"./MenuListHeading-uHuYXsTq.js";import"./MenuItem-Bmkwg1bx.js";import"./ItemMedia-BM0esdrg.js";import"./Checkmark-B5_y3YEn.js";import"./ItemLabel-B5CnFFsc.js";import"./ItemControls-5TCj7bye.js";import"./InformationSquare-RpHoIVms.js";import"./MenuElipsisHorizontal-DksIAP7L.js";import"./Section-SIo_MtMG.js";import"./Flex-BVj8i7c1.js";import"./ButtonGroup-D4ZwjyVx.js";import"./Divider-Cp3dLTQp.js";import"./SettingsItem-BfOVoYy5.js";import"./SettingsItemBase-CpsNU8lU.js";import"./ItemBase-DhwZCfor.js";import"./ItemLink-EKwWGdDt.js";import"./SettingsModal-ZO1TvAQM.js";import"./ModalBody-DInWXo4g.js";import"./ButtonIcon-MD5DjO6C.js";import"./ButtonLabel-DLfBXBU4.js";import"./AccountOrganization-V7kV8WFi.js";import"./Byline-BlzM78Vf.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
