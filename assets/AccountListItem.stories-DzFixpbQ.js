var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-DliZ2j7V.js";import{S as l}from"./Handshake-CyyCj87T.js";import{S as o}from"./Bell-CkSmkUYW.js";import{S as m}from"./Hashtag-rQDpNgCF.js";import{S as c}from"./Files-CETeleKy.js";import{A as g}from"./AccountListItem-CPHclW0h.js";import{A as d}from"./AccountListItemDetails-D2C6QTMr.js";import{L as u}from"./List-BHc6Lwhq.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-Br4SdUBJ.js";import"./Input-BcFkd5TI.js";import"./Avatar-Bb13CEJH.js";import"./AvatarGroup-BP8b6NDq.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./Heading-CtKubyco.js";import"./useHighlightedText-D1lssxtb.js";import"./ChevronUp-yDNMXP2e.js";import"./ChevronDown-DO1dBJk1.js";import"./ChevronRight-_BaSemP0.js";import"./HeartFill-IptN33lT.js";import"./ContextMenu-D6pTyVMF.js";import"./useDropdownMenuController-X1T9D1nQ.js";import"./Dropdown-BbS2MxJj.js";import"./SearchField-CHTtqi8q.js";import"./MagnifyingGlass-BuxQzsSI.js";import"./FieldBase-CUazmIBl.js";import"./Typography-Oc42wyxk.js";import"./Field-DYOclivh.js";import"./Label-F6glHlTT.js";import"./useMenu-Bhv2948N.js";import"./MenuListItem-eO1CqTCm.js";import"./MenuListDivider-kl64fblZ.js";import"./MenuListHeading-DGDFRB8j.js";import"./MenuItem-BWlafNQ2.js";import"./ItemMedia-DsNtfucp.js";import"./Checkmark-D4_xXQHC.js";import"./ItemLabel-ChEAFnfF.js";import"./ItemControls-rcas_vti.js";import"./InformationSquare-Bli9QzR2.js";import"./MenuElipsisHorizontal-CJN3iyyv.js";import"./Section-DMRyqAwI.js";import"./Flex-BMB99n2z.js";import"./ButtonGroup-CWxuOyOz.js";import"./Divider-DZaxc5v8.js";import"./SettingsItem-DLvTcTBS.js";import"./SettingsItemBase-BcoKJnXj.js";import"./ItemBase-B9IKgDin.js";import"./ItemLink-MyE0gqTU.js";import"./SettingsModal-oK3DeDKP.js";import"./ModalBody-BFFzW0gc.js";import"./ButtonIcon-DHmUYEVQ.js";import"./ButtonLabel-DMMRQrGY.js";import"./AccountOrganization-BFlgN2rh.js";import"./Byline-Dmr5VWky.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
