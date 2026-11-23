var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-HroKCH1i.js";import{S as l}from"./Handshake-Cssr96n8.js";import{S as a}from"./Bell-BbNhDS7V.js";import{S as m}from"./Hashtag-C55ZWZs6.js";import{S as c}from"./Files-B7xaEqht.js";import{A as g}from"./AccountListItem-DBR7slcZ.js";import{A as d}from"./AccountListItemDetails-CX1THVWU.js";import{L as u}from"./List-D5BQ3DHy.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-CUjfvC8Z.js";import"./Input-KntdUcqG.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./ChevronUp-CmHElL6S.js";import"./ChevronDown-DmtpYDji.js";import"./ChevronRight-CnU_-vpz.js";import"./HeartFill-CZHOmC4o.js";import"./ContextMenu-BKY8RZIH.js";import"./useDropdownMenuController-Ba1nZRew.js";import"./Dropdown-CxvfuUHz.js";import"./SearchField-DdJVtzp5.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuListDivider-DtrGkUUW.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemMedia-BGnaafVo.js";import"./ItemLabel-BExOJJ8K.js";import"./ItemControls-P_AZ0k9Y.js";import"./FieldBase-Dy7F34xJ.js";import"./Typography-mUXdli5h.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./useMenu-DLxClmSr.js";import"./InformationSquare-uPdk22J8.js";import"./Section-C0qOnBgx.js";import"./Flex-CL3BtjUZ.js";import"./ButtonGroup-Ds7x4PTq.js";import"./Divider-C14K5hFz.js";import"./SettingsItem-Dt8sqSb4.js";import"./SettingsItemBase-FifKIRIq.js";import"./ItemBase-DIAn1C91.js";import"./ItemLink-Cd5xME8U.js";import"./SettingsModal-DcnN5o9V.js";import"./ModalBody-BQv1Fp6f.js";import"./ButtonIcon-NRkGjrsB.js";import"./ButtonLabel-BQfOlvzM.js";import"./AccountOrganization-U7qih-NY.js";import"./Byline-DwpDZTWm.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
