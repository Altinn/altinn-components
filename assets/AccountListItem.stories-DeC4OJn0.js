import{a7 as t,c as o}from"./iframe-DE6S9aZ4.js";import{S as s}from"./Handshake-DMKJ6af5.js";import{S as e}from"./Bell-D9owELsq.js";import{S as n}from"./Hashtag-D1bkBwj4.js";import{S as p}from"./Files-D4XkHp7c.js";import{A as l}from"./AccountListItem-CA6UC0E2.js";import{A as m}from"./AccountListItemDetails-Cx_5-vrB.js";import{L as c}from"./List-BtKbJRMJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DYxFGUfM.js";import"./Input-DHBuxbkq.js";import"./Avatar-CNN7KBYB.js";import"./AvatarGroup-kG5dzOiP.js";import"./Badge-BKORQsmw.js";import"./Tooltip-B3xZNbnc.js";import"./Heading-BDklncvD.js";import"./useHighlightedText-C20f3R5e.js";import"./ChevronUp-DiUn2hCV.js";import"./ChevronDown-BW8AfmI4.js";import"./ChevronRight-CaR2K8Z7.js";import"./HeartFill-CYZ6uHxs.js";import"./ContextMenu-OB_xrmDU.js";import"./useDropdownMenuController-DjzmpwyV.js";import"./Dropdown-CtTBKP-C.js";import"./SearchField-DLpVp_NL.js";import"./MagnifyingGlass-Cw9dgxbo.js";import"./FieldBase-Dqt8MJKx.js";import"./Typography-Cfn_aMgf.js";import"./Field-CqVl0h_R.js";import"./Label-MWSbEF7h.js";import"./useMenu-BnFUnl7r.js";import"./MenuListItem-CLQjAJhf.js";import"./MenuListDivider-TgKUiY6a.js";import"./MenuListHeading-C_U_JJdE.js";import"./MenuItem-DIQqnyL7.js";import"./ItemMedia-CpnAVdfr.js";import"./Checkmark-DE4sJMpI.js";import"./ItemLabel-BuYlysP4.js";import"./ItemControls-BOAqxChM.js";import"./InformationSquare-BoTINEEI.js";import"./MenuElipsisHorizontal-BBzbVmNF.js";import"./Section-y38TddTh.js";import"./Flex-DAi1mqH2.js";import"./ButtonGroup-DMo1vjo2.js";import"./Divider-CaMZ1Hz3.js";import"./SettingsItem-BmKdSFMk.js";import"./SettingsItemBase-BzAHYS6t.js";import"./ItemBase-LlpdCdPt.js";import"./ItemLink-BOsA1UC5.js";import"./SettingsModal-C8iA9LGz.js";import"./ModalBody-Buzt5Y32.js";import"./ButtonIcon-BPhBRYr6.js";import"./ButtonLabel-BM1cuKZU.js";import"./AccountOrganization-D5J121Sq.js";import"./Byline-DWlUTVPr.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
