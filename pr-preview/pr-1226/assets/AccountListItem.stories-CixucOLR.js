import{a7 as t,c as o}from"./iframe-DTEeNdyk.js";import{S as s}from"./Handshake-C_zU5KTs.js";import{S as e}from"./Bell-B1ct7cEs.js";import{S as n}from"./Hashtag-DMgP2L1x.js";import{S as p}from"./Files-DXluXho_.js";import{A as l}from"./AccountListItem-CLqZmVbB.js";import{A as m}from"./AccountListItemDetails-CuHmfXcf.js";import{L as c}from"./List-CU3KNR3a.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DvG_gwPx.js";import"./Input-BxybDda_.js";import"./Avatar-vmGSBU3d.js";import"./AvatarGroup-Sicw8XeK.js";import"./Badge-CRnEe1Vv.js";import"./Tooltip-Oh_JH-x_.js";import"./Heading-DUvNz5de.js";import"./useHighlightedText-D9AI5Zbv.js";import"./ChevronUp-C99xJaCq.js";import"./ChevronDown-MYe8GL0o.js";import"./ChevronRight-DC0APSAK.js";import"./HeartFill-DXPwLEoE.js";import"./ContextMenu-P3ylAoeJ.js";import"./useDropdownMenuController-BMwPFGHP.js";import"./Dropdown-JTdvFb7I.js";import"./SearchField-BDcWIDhP.js";import"./MagnifyingGlass-Q_O4EtL2.js";import"./FieldBase-DjxBgQLC.js";import"./Typography-CqVDEuXx.js";import"./Field-IhE5_Jjk.js";import"./Label-B-q4Hdcy.js";import"./useMenu-CTNN937Q.js";import"./MenuListItem-DQq69WCb.js";import"./MenuListHeading-vODo-CbQ.js";import"./MenuItem-CveCSlsE.js";import"./ItemMedia-BWl2RL2w.js";import"./Checkmark-BHFJ8diG.js";import"./ItemLabel-CiRGygZk.js";import"./ItemControls-BKFWWzHw.js";import"./index-szorRtVx.js";import"./InformationSquare-W352tleo.js";import"./MenuElipsisHorizontal-D7VYWEMV.js";import"./Section-D3DDcoJn.js";import"./Flex-Bg6HJ0Xq.js";import"./ButtonGroup-C9iOkEQW.js";import"./Divider-BBCxGdQr.js";import"./SettingsItem-CX9DYdlK.js";import"./SettingsItemBase-CuUzDCHv.js";import"./ItemBase-CqyVza2q.js";import"./ItemLink-TlorRN3x.js";import"./SettingsModal-dBfWKUwq.js";import"./ModalBody-CfnSJT4_.js";import"./ButtonIcon-3YefSWar.js";import"./ButtonLabel-aN9xoT5L.js";import"./AccountOrganization-DjzG70Hp.js";import"./Byline-ZG806qeX.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
