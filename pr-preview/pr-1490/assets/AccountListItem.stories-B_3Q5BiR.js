var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-BW6sNfUG.js";import{S as l}from"./Handshake-ZaUwdBnz.js";import{S as a}from"./Bell-D7qjbS4k.js";import{S as m}from"./Hashtag-B2SLCgCn.js";import{S as c}from"./Files-Cf0jZox9.js";import{A as g}from"./AccountListItem-CDz9LkX8.js";import{A as d}from"./AccountListItemDetails-Dku7xqDN.js";import{L as u}from"./List-LxK0i123.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-sjVLqN5k.js";import"./Input-gnkfXNcC.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./Heading-DZSCY0dD.js";import"./useHighlightedText-Dx6jhFuL.js";import"./ChevronUp-D9Lqz4C3.js";import"./ChevronDown-CGVF_s9R.js";import"./ChevronRight-DCXIgdRg.js";import"./HeartFill-B-yKUcbi.js";import"./ContextMenu-Ci0D4hVi.js";import"./useDropdownMenuController-BlHO4qrZ.js";import"./Dropdown-bOP-opo8.js";import"./SearchField--GRE4W__.js";import"./MagnifyingGlass-Drdd_pqG.js";import"./MenuListItem-BekZrZTE.js";import"./MenuListDivider-Bd4QDS3f.js";import"./MenuItem-C4PV3Kj2.js";import"./CheckboxUncheckedIcon-D8b9z956.js";import"./RadioUncheckedIcon-BmM-W-GL.js";import"./ItemMedia-C8rbfA3l.js";import"./ItemLabel-Dcm3mA4k.js";import"./ItemControls-Bqaen0yJ.js";import"./FieldBase-CiEo5wf3.js";import"./Typography-DluWU8As.js";import"./Field-BCzysLpY.js";import"./Label-xW9KovlB.js";import"./useMenu-uJdjEIIP.js";import"./InformationSquare-1mOGr1dD.js";import"./Section-C6OUO-lD.js";import"./Flex-Ws1WKTNd.js";import"./ButtonGroup-CkPO8wDs.js";import"./Divider-DHERf67l.js";import"./SettingsItem-cjjs1-9F.js";import"./SettingsItemBase-D0ADEhJm.js";import"./ItemBase-CfaNBgoH.js";import"./ItemLink-BFgdINRy.js";import"./SettingsModal-CPgr95ko.js";import"./ModalBody-iaAxc7Vl.js";import"./ButtonIcon-ByUF5niU.js";import"./ButtonLabel-ByUlEqji.js";import"./AccountOrganization-Cy8nCHkU.js";import"./Byline-BE-T5e6F.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
