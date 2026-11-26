var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-ucBQ5HcJ.js";import{S as l}from"./Handshake-U_EMrQjx.js";import{S as a}from"./Bell-D0GF_M31.js";import{S as m}from"./Hashtag-i8Vqeu5g.js";import{S as c}from"./Files-DvJiaOmf.js";import{A as g}from"./AccountListItem-CGEAQ4Gz.js";import{A as d}from"./AccountListItemDetails-BZ1YapKB.js";import{L as u}from"./List-Yx58osc0.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-iuz8tySc.js";import"./Input-CVLmoyI4.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./Badge-DakQ_ooc.js";import"./Tooltip-CfIbxb_W.js";import"./Heading-B62YbUQ8.js";import"./useHighlightedText-DrXs5ARP.js";import"./ChevronUp-Bnv01usE.js";import"./ChevronDown-CmXAxF6f.js";import"./ChevronRight-Vb4FEV6b.js";import"./HeartFill-D4wd6iiy.js";import"./ContextMenu-CFrUWzsT.js";import"./useDropdownMenuController-Dj95a6Yf.js";import"./Dropdown-CPSoxfyr.js";import"./SearchField-0Y9a3sbc.js";import"./MagnifyingGlass-asWGm_ME.js";import"./MenuListItem-BGVKEzIM.js";import"./MenuListDivider-B7GAi5Kj.js";import"./MenuItem-DSDVSdKL.js";import"./CheckboxUncheckedIcon-Bxf-Z0Ny.js";import"./RadioUncheckedIcon-D7Forzmr.js";import"./ItemMedia-BkaFl7YX.js";import"./ItemLabel-CZZsCEBi.js";import"./ItemControls-DxZwYBlC.js";import"./FieldBase-BybGrojy.js";import"./Typography-z9HgrCC2.js";import"./Field-Do9LfNoA.js";import"./Label-Ch2cl7wL.js";import"./useMenu-zMhFd5Ju.js";import"./InformationSquare-BC6md9kr.js";import"./Section-BY1hSuM_.js";import"./Flex-obMty-VJ.js";import"./ButtonGroup-57G882s-.js";import"./Divider-DQyBSo88.js";import"./SettingsItem-C8ztNyYi.js";import"./SettingsItemBase-oktmz-O4.js";import"./ItemBase-CwHYgeFH.js";import"./ItemLink-Dm0lO5Ir.js";import"./SettingsModal-BSAlKkZB.js";import"./ModalBody-BJrMsUN-.js";import"./ButtonIcon-DUU9Fits.js";import"./ButtonLabel-DiEo7qm4.js";import"./AccountOrganization-TW2xNI8z.js";import"./Byline-CWiJow4a.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
