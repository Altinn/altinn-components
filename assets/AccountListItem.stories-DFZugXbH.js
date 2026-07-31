import{a7 as t,c as o}from"./iframe-CAjSv_nS.js";import{S as s}from"./Handshake-ChQjMM0v.js";import{S as e}from"./Bell-CZMg6VBY.js";import{S as n}from"./Hashtag-BYqKJGur.js";import{S as p}from"./Files-6yoCPIHr.js";import{A as l}from"./AccountListItem-DFVSxclb.js";import{A as m}from"./AccountListItemDetails-ClM40RAG.js";import{L as c}from"./List-Cb27YNZb.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-tV3UUBFk.js";import"./Input-BnE3VUoY.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./Heading-Dl2CB_qz.js";import"./useHighlightedText-BhVVUcDt.js";import"./ChevronUp-CiQ1vTJ_.js";import"./ChevronDown-DV1YpklV.js";import"./ChevronRight-DBCR3hzH.js";import"./HeartFill-DEe8KAvC.js";import"./ContextMenu-BXFgsv5t.js";import"./useDropdownMenuController-13HA63ON.js";import"./Dropdown-CFFHqeqH.js";import"./SearchField-BeyrM52L.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./useMenu-DNlZtc9u.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./MenuListHeading-DK632LaI.js";import"./MenuItem-C500ZIIj.js";import"./ItemMedia-DCE7hmVr.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./ItemControls-C86-eNC3.js";import"./InformationSquare-CA9knMPH.js";import"./MenuElipsisHorizontal-BDVfbbpF.js";import"./Section-QeF7xouO.js";import"./Flex-Dkl3V3J_.js";import"./ButtonGroup-CHaM1dTc.js";import"./Divider-DwgePPkW.js";import"./SettingsItem-DMp8uTMO.js";import"./SettingsItemBase-XF7ZTHu0.js";import"./ItemBase-Bsx8jWac.js";import"./ItemLink-BmhLdRET.js";import"./SettingsModal-r0MnGfEQ.js";import"./ModalBody-BEocNTvo.js";import"./ButtonIcon-BmNdvyqy.js";import"./ButtonLabel-BEVL1UP8.js";import"./AccountOrganization-xRLBPwwy.js";import"./Byline-Cj2qEBxk.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
