import{a7 as t,c as o}from"./iframe-qmQCxFa-.js";import{S as s}from"./Handshake-DfO9JGrg.js";import{S as e}from"./Bell-BAkU5Gwo.js";import{S as n}from"./Hashtag-D_XKZS9S.js";import{S as p}from"./Files-CjQC65KT.js";import{A as l}from"./AccountListItem-y2N3V2xD.js";import{A as m}from"./AccountListItemDetails-BYpD_vGN.js";import{L as c}from"./List-66Jmre4e.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-TUtQYaSN.js";import"./Input-UWmslA08.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./Heading-BfhEliS6.js";import"./useHighlightedText-DvW-80BF.js";import"./ChevronUp-D-ejY9oL.js";import"./ChevronDown-B2_8CHiS.js";import"./ChevronRight-D4PJikp-.js";import"./HeartFill-CShT8fJf.js";import"./ContextMenu-BKNR-8e0.js";import"./useDropdownMenuController-D_F6_m9G.js";import"./Dropdown-Bfr6s4KY.js";import"./SearchField-yI2IHctk.js";import"./MagnifyingGlass-BEFsIwDK.js";import"./FieldBase-uaodyCSq.js";import"./Typography-CwhPNAxM.js";import"./Field-CR7g45g-.js";import"./Label-p7H0Mohi.js";import"./useMenu-BTzsKN7O.js";import"./MenuListItem-BJU-5Qr1.js";import"./MenuListDivider-lNR4js8T.js";import"./MenuListHeading-DI3xzslm.js";import"./MenuItem-BJ0MSgwv.js";import"./ItemMedia-Ch0GCbf9.js";import"./Checkmark-Dr10MfLv.js";import"./ItemLabel-DQygMXqb.js";import"./ItemControls-BNv7LYwf.js";import"./InformationSquare-dfx4dBae.js";import"./MenuElipsisHorizontal-BZ2CkxHW.js";import"./Section-DIAhVmeV.js";import"./Flex-Da8DWGDO.js";import"./ButtonGroup-_CfbD1Th.js";import"./Divider-Ct2eo3IY.js";import"./SettingsItem-B1lcK7bm.js";import"./SettingsItemBase-DSkR0SRZ.js";import"./ItemBase-BQ6Vg0LW.js";import"./ItemLink-CpI2Nssx.js";import"./SettingsModal-BgKQBtSZ.js";import"./ModalBody-90KYXdlU.js";import"./ButtonIcon-BsscKFAt.js";import"./ButtonLabel-B8phRdNa.js";import"./AccountOrganization-B82CYuxY.js";import"./Byline-CWK2h7MN.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
