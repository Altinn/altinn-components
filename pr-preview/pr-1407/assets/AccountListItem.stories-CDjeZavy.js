var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a5 as t,b as p}from"./iframe-CmcSEjvS.js";import{S as m}from"./Handshake-CY6es_2m.js";import{S as a}from"./Bell-CzgE88qh.js";import{S as l}from"./Hashtag-Doa64aUg.js";import{S as c}from"./Files-DxhHOFxv.js";import{A as g}from"./AccountListItem-B-0zIjVV.js";import{A as d}from"./AccountListItemDetails-3-QfRNoG.js";import{L as u}from"./List-DKoS5qie.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-CGdPgfN9.js";import"./Input-C0nOO2ZR.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ChevronUp-DVy7WPfM.js";import"./ChevronDown-CI4G7sPT.js";import"./ChevronRight-B5wtiA4y.js";import"./HeartFill-vDdmUGil.js";import"./ContextMenu-Bo2fqWGf.js";import"./useDropdownMenuController-CjF5utG_.js";import"./Dropdown-BXdn9jDY.js";import"./SearchField-DQeX1ZYV.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./ItemLabel-s_xPF5R8.js";import"./ItemControls-YGZP0Vjk.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./useMenu-C4pen0si.js";import"./MenuListDivider-wZXMjqHS.js";import"./InformationSquare-6xY-3cyl.js";import"./MenuElipsisHorizontal-DcPMVctg.js";import"./Section-Bo2v-MBz.js";import"./Flex-DEGiHBSh.js";import"./ButtonGroup-Cpml5GDI.js";import"./Divider-BXgmMAUp.js";import"./SettingsItem-B7CMMYfk.js";import"./SettingsItemBase-DTDRF-eI.js";import"./ItemBase-DGtB-EKc.js";import"./ItemLink-CfNuON4u.js";import"./SettingsModal-CfdN6cEJ.js";import"./ModalBody-_pzP4G9c.js";import"./ButtonIcon-qcPphlSi.js";import"./ButtonLabel-C3jzDSjq.js";import"./AccountOrganization-Ctmbzwkn.js";import"./Byline-BkEVnoxC.js";const Xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:m,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:l,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},It=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,It as __namedExportsOrder,Xt as default};
