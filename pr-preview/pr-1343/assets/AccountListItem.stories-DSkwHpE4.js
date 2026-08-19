import{a7 as t,c as o}from"./iframe-F_FB4Yxl.js";import{S as s}from"./Handshake-Bf4dk__W.js";import{S as e}from"./Bell-BRMGKliV.js";import{S as n}from"./Hashtag-CZsxINj4.js";import{S as p}from"./Files-Z-15MGMb.js";import{A as l}from"./AccountListItem-e5lOLolE.js";import{A as m}from"./AccountListItemDetails-ClgHTPLU.js";import{L as c}from"./List-WSKqvn9S.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-QexinWWd.js";import"./Input-CADZ4I-X.js";import"./Avatar-DE7K7igg.js";import"./AvatarGroup-B7Qf-EGM.js";import"./Badge-C_852a7b.js";import"./Tooltip-B803JVqh.js";import"./Heading-Cj7rgSGX.js";import"./useHighlightedText-CJsPbXHy.js";import"./ChevronUp-BmFZO6Yq.js";import"./ChevronDown-CmhX0LZg.js";import"./ChevronRight-f1WSa4_L.js";import"./HeartFill-sgqqxygE.js";import"./ContextMenu-CIGiPruo.js";import"./useDropdownMenuController-CALQpcRF.js";import"./Dropdown-Qibhj6Vz.js";import"./SearchField-XLSYMjsy.js";import"./MagnifyingGlass-xYv1kWZx.js";import"./FieldBase-DKsxkZ_u.js";import"./Typography-BQdVTYYF.js";import"./Field-DOnuYCd0.js";import"./Label-DEw_iIGq.js";import"./useMenu-DGY2fmdm.js";import"./MenuListItem-X5TFO5En.js";import"./MenuListDivider-Cy2nuh7X.js";import"./MenuListHeading-BlfnlMHy.js";import"./MenuItem-Cx2LMlDr.js";import"./ItemMedia-CoUbiAZN.js";import"./Checkmark-CMCe3Dch.js";import"./ItemLabel-BJusrNMy.js";import"./ItemControls-4PJArwOE.js";import"./InformationSquare-DJU8cSbx.js";import"./MenuElipsisHorizontal-d1d63Dvi.js";import"./Section-BgR8r3RU.js";import"./Flex-QNMJxvpD.js";import"./ButtonGroup-BZH662VO.js";import"./Divider-DRq0LYFI.js";import"./SettingsItem-wFBCNoHY.js";import"./SettingsItemBase-Dfyg6Fno.js";import"./ItemBase-B9Rg_8_o.js";import"./ItemLink-Dh937AuZ.js";import"./SettingsModal-CHbp-6JA.js";import"./ModalBody-uLS_r9P8.js";import"./ButtonIcon-CeLrnMM_.js";import"./ButtonLabel-ClraFuq1.js";import"./AccountOrganization-Brn8Hli0.js";import"./Byline-DojDAdb5.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
