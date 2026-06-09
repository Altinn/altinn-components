import{a7 as t,c as o}from"./iframe-D6Pw3lmv.js";import{S as s}from"./Handshake-CvgP6jWd.js";import{S as e}from"./Bell-FB6IfEql.js";import{S as n}from"./Hashtag-B1T1xxr0.js";import{S as p}from"./Files-vngkdD_l.js";import{A as l}from"./AccountListItem-BGLc_5Uu.js";import{A as m}from"./AccountListItemDetails-hLSFOzJW.js";import{L as c}from"./List-yiBkID25.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-B1hZ7A47.js";import"./Input-BPiAPMWI.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./Heading-Bsu5tLR0.js";import"./useHighlightedText-iOuYupmt.js";import"./ChevronUp-vVDQNUNf.js";import"./ChevronDown-CBhAS_PQ.js";import"./ChevronRight-DrJyRyMs.js";import"./HeartFill-CgHy8U4l.js";import"./ContextMenu-BxW7sU72.js";import"./useDropdownMenuController-NInAg9dA.js";import"./Dropdown-DnYymeta.js";import"./SearchField-EcYIPpv0.js";import"./MagnifyingGlass-xEXh01wv.js";import"./FieldBase-q3f36oGg.js";import"./Typography-bPKdoJNM.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./useMenu-AaKLsWFm.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuListHeading-CMCHjdRB.js";import"./MenuItem-4x07-Z8Y.js";import"./ItemMedia-BWttq_aD.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./ItemControls-DN7HEIDI.js";import"./index-CjPQDnhT.js";import"./InformationSquare-D2Bd0bEl.js";import"./MenuElipsisHorizontal-Coq-MnNJ.js";import"./Section-B6MiXL8W.js";import"./Flex-CRGRbwD2.js";import"./ButtonGroup-BukNZ9_Z.js";import"./Divider-BBy7x_-3.js";import"./SettingsItem-CW-6UT7J.js";import"./SettingsItemBase-XkXN956I.js";import"./ItemBase-D25TzUDm.js";import"./ItemLink-J0cRTxzg.js";import"./SettingsModal-DtZGdoZV.js";import"./ModalBody-eofliHBo.js";import"./ButtonIcon-BZRYAWT7.js";import"./ButtonLabel-Byk5sCAh.js";import"./AccountOrganization-Dc0xuxUf.js";import"./Byline-l1hiTfum.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
