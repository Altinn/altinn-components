var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a7 as t,c as p}from"./iframe-DdPcKG0O.js";import{S as l}from"./Handshake-DJM_xDSY.js";import{S as a}from"./Bell-B_p1_Gag.js";import{S as m}from"./Hashtag-CkhTUE70.js";import{S as c}from"./Files-041jtAH3.js";import{A as g}from"./AccountListItem-DbIA1bbY.js";import{A as d}from"./AccountListItemDetails-BxW0ibPm.js";import{L as u}from"./List-CQSNq3De.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-DAMnEUMg.js";import"./Input-RBXxlYal.js";import"./Avatar-Dfz4UezB.js";import"./AvatarGroup-BtZlCnKI.js";import"./Badge-BzZwcsiz.js";import"./Tooltip-wlipxmMb.js";import"./Heading-BJje4zKM.js";import"./useHighlightedText-BvQbOG8T.js";import"./ChevronUp-DhLREmKD.js";import"./ChevronDown-Bg2scdYv.js";import"./ChevronRight-Cmdt4Cn7.js";import"./HeartFill-BIqdK5f8.js";import"./ContextMenu-DTBMpttb.js";import"./useDropdownMenuController-C4DxR2qZ.js";import"./useIsDesktop-Db5oQl2d.js";import"./Dropdown-COjWQps0.js";import"./SearchField-DZAM9WJB.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-DvG6YRWZ.js";import"./MenuListItem-DT2WooyF.js";import"./MenuListDivider-Dinu7Rw4.js";import"./MenuItem-BOFr4MJg.js";import"./CheckboxUncheckedIcon-BsqpIyxr.js";import"./RadioUncheckedIcon-DgOrjSnU.js";import"./ItemMedia-BsdmKVrj.js";import"./ItemLabel-vi7acRQa.js";import"./ItemControls-Bf5MqGaN.js";import"./FieldBase-V879Q4R4.js";import"./Typography-D4dRQ14t.js";import"./Field-DKeS0ieC.js";import"./Label-BJbtrgL_.js";import"./useMenu-B_zDT5uM.js";import"./InformationSquare-RfPtjfhK.js";import"./Section-C3SZ48VL.js";import"./Flex-Cxkl80LA.js";import"./ButtonGroup-7J0PZlIk.js";import"./Divider-Dmk3LnUK.js";import"./SettingsItem-DIYrmFg2.js";import"./SettingsItemBase-BEidFSPz.js";import"./ItemBase-Dx89ucny.js";import"./ItemLink-DgNk0tuY.js";import"./SettingsModal-CIV3DCAg.js";import"./ModalBody-ClEfishX.js";import"./ButtonLabel-Dt_XRmzl.js";import"./AccountOrganization-CiB0nGGD.js";import"./Byline-4Yminzw9.js";const bt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},Xt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,Xt as __namedExportsOrder,bt as default};
