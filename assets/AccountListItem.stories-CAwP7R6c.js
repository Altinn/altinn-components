import{a7 as t,c as o}from"./iframe-DMrRMxbq.js";import{S as s}from"./Handshake-D8W0lNKB.js";import{S as e}from"./Bell-bAScnVre.js";import{S as n}from"./Hashtag-CGNCqVxA.js";import{S as p}from"./Files-CQ15x_UZ.js";import{A as l}from"./AccountListItem-DMQwlMde.js";import{A as m}from"./AccountListItemDetails-CXNGUrpA.js";import{L as c}from"./List-B8WZeWpp.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-adrx2A9Z.js";import"./Input-CZPP85wE.js";import"./Avatar-C6i6C6T9.js";import"./AvatarGroup-DVS-_6qx.js";import"./Badge-CzHyduDR.js";import"./Tooltip-1SJQbRAy.js";import"./Heading-BhmjWuIr.js";import"./useHighlightedText-qcaYlVq2.js";import"./ChevronUp-iFSbc_bY.js";import"./ChevronDown-B_vMfdZY.js";import"./ChevronRight-ngEBzgMu.js";import"./HeartFill-D9MSWJSi.js";import"./ContextMenu-Bfc1xyI2.js";import"./useDropdownMenuController-V_PAwfJs.js";import"./Dropdown-B5Bg-WA0.js";import"./SearchField-nNatmuZA.js";import"./MagnifyingGlass-DofikZhZ.js";import"./FieldBase-BwVJ7Sfq.js";import"./Typography-z164oB1T.js";import"./Field-DxDkeKhB.js";import"./Label-CB0_8IHy.js";import"./useMenu-CNg8vInV.js";import"./MenuListItem-CATFKnlr.js";import"./MenuListDivider-CzVCr-XK.js";import"./MenuListHeading-B9JHXv6C.js";import"./MenuItem-DLpEa2I6.js";import"./ItemMedia-Dx1IKYEg.js";import"./Checkmark-BUuDcLZs.js";import"./ItemLabel-DavwL6MJ.js";import"./ItemControls-DNnHu-Ez.js";import"./InformationSquare-C88VQYSr.js";import"./MenuElipsisHorizontal-B8IDozkD.js";import"./Section-R5IQ5vtB.js";import"./Flex-D4xbJs2N.js";import"./ButtonGroup-DGYAXoph.js";import"./Divider-CMZ3YTOm.js";import"./SettingsItem-CCx_sSsa.js";import"./SettingsItemBase-8tE--AV6.js";import"./ItemBase-Pn30j4Ce.js";import"./ItemLink-BR9CgO0o.js";import"./SettingsModal-hbvHbbLI.js";import"./ModalBody-DyvDS6kr.js";import"./ButtonIcon-CVi_n_n2.js";import"./ButtonLabel-DrLm7ODF.js";import"./AccountOrganization-CoUX1i9J.js";import"./Byline-CKiw8Kpx.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
