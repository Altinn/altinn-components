import{a7 as t,c as o}from"./iframe-BRsjK6zm.js";import{S as s}from"./Handshake-CIamyyMd.js";import{S as e}from"./Bell-C2791M63.js";import{S as n}from"./Hashtag-BGT40CxM.js";import{S as p}from"./Files-DJnsbZUs.js";import{A as l}from"./AccountListItem-CPo-6fcM.js";import{A as m}from"./AccountListItemDetails-5qk2TC4R.js";import{L as c}from"./List-CVWi44Xg.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-B2uke9vo.js";import"./Input-_uBO5XEg.js";import"./Avatar-CrYVj7lw.js";import"./AvatarGroup-DKDwx9eP.js";import"./Badge-BbcJeGFK.js";import"./Tooltip-Bg2GzV5c.js";import"./Heading-tpemMnuB.js";import"./useHighlightedText-P3be0gWv.js";import"./ChevronUp-B4spzIlB.js";import"./ChevronDown-kQjoglkI.js";import"./ChevronRight-GPnb-Lf1.js";import"./HeartFill-D9EGe-Ba.js";import"./ContextMenu-CMMvswJT.js";import"./useDropdownMenuController-CBf3Z2H_.js";import"./Dropdown-C5aQ46PU.js";import"./SearchField-DVi64UUy.js";import"./MagnifyingGlass-Cybsybf0.js";import"./FieldBase-C-kV1fOX.js";import"./Typography-BVRUlHaM.js";import"./Field-COSptDWF.js";import"./Label-DkpDVbDp.js";import"./useMenu-D2OP8CpX.js";import"./MenuListItem-BiWM2UBU.js";import"./MenuListDivider-zBNVAq_M.js";import"./MenuListHeading-DoVWXZX2.js";import"./MenuItem-CcGRfHNR.js";import"./ItemMedia-BuhaiW7f.js";import"./Checkmark-BGtGEGuc.js";import"./ItemLabel-DL87Mmkd.js";import"./ItemControls-DOwQd-aH.js";import"./InformationSquare-CJ79Iw8R.js";import"./MenuElipsisHorizontal-DwejWzSi.js";import"./Section-DAR_XxTX.js";import"./Flex-CYDzZKtj.js";import"./ButtonGroup-DZmKTqxp.js";import"./Divider-BfJqSdO1.js";import"./SettingsItem-B695g5BK.js";import"./SettingsItemBase-2meAm_XM.js";import"./ItemBase-6wELWcHH.js";import"./ItemLink-CfHLQLAQ.js";import"./SettingsModal-BhAlGfSs.js";import"./ModalBody-Cx-bJ05q.js";import"./ButtonIcon-CO4iGeIF.js";import"./ButtonLabel-w8kuoY5Z.js";import"./AccountOrganization-BgsTknEZ.js";import"./Byline-C7W6OXau.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
