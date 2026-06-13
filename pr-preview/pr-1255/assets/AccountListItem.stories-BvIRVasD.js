import{a7 as t,c as o}from"./iframe-2h8IP8d3.js";import{S as s}from"./Handshake-i3fou9K6.js";import{S as e}from"./Bell-Bthb0c9l.js";import{S as n}from"./Hashtag-P4C8bWTr.js";import{S as p}from"./Files-OvybudHN.js";import{A as m}from"./AccountListItem-CGpqIqQt.js";import{A as l}from"./AccountListItemDetails-BMGjk7qZ.js";import{L as c}from"./List-BAuO8R5u.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Cu2B-552.js";import"./Input-CcSuNkw7.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./Heading-DXu-0NAz.js";import"./useHighlightedText-CelzCUqF.js";import"./ChevronUp-BQbblg8y.js";import"./ChevronDown-D2-mCLBn.js";import"./ChevronRight-Bz8Cr0I4.js";import"./HeartFill-Bde1mNCW.js";import"./ContextMenu-JRPx45pc.js";import"./useDropdownMenuController--HjFekig.js";import"./Dropdown-BKTHH5xT.js";import"./SearchField-_MN_HrdV.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./useMenu-DBT0rzRb.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./ItemControls-F7yjZiAX.js";import"./index-CQmnZsg3.js";import"./InformationSquare-DAAIm6NS.js";import"./MenuElipsisHorizontal-CeM94VAc.js";import"./Section-CJtHgorM.js";import"./Flex-CMEhZHn2.js";import"./ButtonGroup-Ct8EhDC8.js";import"./Divider-aEHEf4IL.js";import"./SettingsItem-C44QC793.js";import"./SettingsItemBase-BIjnVYrZ.js";import"./ItemBase-Pkm_V99C.js";import"./ItemLink-CONNhs78.js";import"./SettingsModal-VYSSGws5.js";import"./ModalBody-BO_Js4U5.js";import"./ButtonIcon-p_3bwngP.js";import"./ButtonLabel-BONSwqvL.js";import"./AccountOrganization-0fuIFt9V.js";import"./Byline-CFuFEoPr.js";const ut={title:"Account/AccountListItem",component:m,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vt=["Default","Expanded"];export{r as Default,i as Expanded,vt as __namedExportsOrder,ut as default};
