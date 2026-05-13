import{j as t}from"./iframe-DkQPO9ro.js";import{S as a}from"./Handshake-D6UmhSHs.js";import{S as e}from"./Bell-CqR_GCXB.js";import{S as s}from"./Hashtag-Ie2WUL4b.js";import{S as n}from"./Files-C7jYqi9F.js";import{A as p}from"./AccountListItem-DmYzJmoq.js";import{L as m}from"./List-DQSHYer2.js";import{A as l}from"./AccountListItemDetails-BfQN5umA.js";import{B as c}from"./Button-OKMeorO5.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CwF4wxTL.js";import"./ListItem-BiMhvfk_.js";import"./index-BrTdOUlk.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./lite-DaUVFjkg.js";import"./XMark-5G2rqhrX.js";import"./Icon-Dao4TSf9.js";import"./Skeleton-8DklmnzK.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-B1oKProt.js";import"./Heading-Otl-Ib-S.js";import"./useHighlightedText-BlkM7iRt.js";import"./ChevronUp-1RXiKLsv.js";import"./ChevronDown-CbPk4DLa.js";import"./ChevronRight-Ddmldm4v.js";import"./HeartFill-B2O-pGHr.js";import"./ContextMenu-Dd8TL9fD.js";import"./useDropdownMenuController-tv24Gc_I.js";import"./Dropdown-DDoGMqNi.js";import"./MenuElipsisHorizontal-BJkqF5yI.js";import"./SearchField-BFSdJUV0.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./FieldBase-BPqKon2e.js";import"./Typography-cgJeIGtL.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./Checkmark-JWLDNW8H.js";import"./ItemControls-Czqw_jtP.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";import"./Flex-Cy28VffD.js";import"./Section-DUH4Cyq_.js";import"./ButtonGroup-3KQzrPQQ.js";import"./Divider-vTnAPnFd.js";import"./SettingsItem-KtrtdTSI.js";import"./SettingsItemBase-okg423NT.js";import"./ItemLink-z5fThoi9.js";import"./SettingsModal-CIbtSnKL.js";import"./ModalBody-GvvO4sGF.js";import"./ButtonIcon-HEZ4yPr4.js";import"./ButtonLabel-teAu4cwf.js";import"./AccountOrganization-BJJycscy.js";import"./Byline-DEuCU6Hn.js";import"./button-Byovksc3.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const St=["Default","Expanded"];export{r as Default,i as Expanded,St as __namedExportsOrder,ft as default};
