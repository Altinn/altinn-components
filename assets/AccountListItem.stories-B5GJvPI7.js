var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-Dhr5kNpI.js";import{S as l}from"./Handshake-DoLRAb7e.js";import{S as a}from"./Bell-CTnba2Qj.js";import{S as m}from"./Hashtag-DwcZVfhI.js";import{S as c}from"./Files-BCyuKfEN.js";import{A as g}from"./AccountListItem-Bwnvj0sX.js";import{A as d}from"./AccountListItemDetails-BQMSYrT8.js";import{L as u}from"./List-CfCaM-vI.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-DNrY8OXn.js";import"./Input-jpu5auKu.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ChevronUp-CnX9Oj5-.js";import"./ChevronDown-CRBE2Pft.js";import"./ChevronRight-BnrL2uT7.js";import"./HeartFill-C2b-lyNp.js";import"./ContextMenu-BSYfi7oi.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./SearchField-Daiwk--y.js";import"./MagnifyingGlass-qp743Sh-.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./ItemLabel-D7TXcLH5.js";import"./ItemControls-CiyO-qr-.js";import"./FieldBase-C_75hFZi.js";import"./Typography-CiPthQfi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";import"./Section-xZgyq4QZ.js";import"./Flex-CQB0dbJh.js";import"./ButtonGroup-DjJP_8QL.js";import"./Divider-B2QpbQHm.js";import"./SettingsItem-p7ebdKX5.js";import"./SettingsItemBase-BD2Mivhr.js";import"./ItemBase-YnVoDumG.js";import"./ItemLink-r00OWv-Y.js";import"./SettingsModal-Ch2wktR-.js";import"./ModalBody-bj2s7Dy2.js";import"./ButtonIcon-3_G48aTa.js";import"./ButtonLabel-Dyo1xgTN.js";import"./AccountOrganization-BcBBgVKI.js";import"./Byline-BXE4AnwT.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
