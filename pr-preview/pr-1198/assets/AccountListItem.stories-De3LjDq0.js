import{p as t}from"./iframe-DrMVe4hJ.js";import{S as a}from"./Handshake-C6bd890L.js";import{S as e}from"./Bell-b8sn31s3.js";import{S as s}from"./Hashtag-CjMqATSE.js";import{S as n}from"./Files-CSswGGok.js";import{A as p}from"./AccountListItem-k3I8uG3K.js";import{A as m}from"./AccountListItemDetails-Doaiu7Ay.js";import{B as l}from"./Button-B40GVZAo.js";import{L as c}from"./List-kom_q9bW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CwrI0QJg.js";import"./ListItem-DPR0AizJ.js";import"./index-B2LUQ97G.js";import"./Input-kqR7j7M6.js";import"./tooltip-BY1BnveL.js";import"./XMark-BXMpu0Gf.js";import"./Icon-CK8FcAiF.js";import"./Skeleton-BKl0bJYN.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./Heading-DYwrq57L.js";import"./useHighlightedText-BA3QT9FH.js";import"./ChevronUp-CD8uiaYc.js";import"./ChevronDown--vsRLj1W.js";import"./ChevronRight-u16zgCRT.js";import"./HeartFill-hfTMvonT.js";import"./ContextMenu-Dtj8L1E_.js";import"./useDropdownMenuController-BAGvidc8.js";import"./Dropdown-CG27uion.js";import"./SearchField-BnuJ-svS.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./FieldBase-C4Wnopmd.js";import"./Typography-BZD6V0ik.js";import"./Label-QaOAiYFD.js";import"./useMenu-CrRt-E4f.js";import"./MenuListItem-D8f5vRSf.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./MenuItem-B27UidAs.js";import"./ItemMedia-B9-jRKLO.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./ItemControls-ztKmX_ZB.js";import"./index-j3-eoKUd.js";import"./InformationSquare-J3q8zJp8.js";import"./MenuElipsisHorizontal-BLWR8eqI.js";import"./Section-BOFb_opG.js";import"./Flex-Bv-_adYq.js";import"./ButtonGroup-Bxqmt3uG.js";import"./Divider-CB6iXjX5.js";import"./SettingsItem-_9jqjSkw.js";import"./SettingsItemBase-B5pF_5of.js";import"./ItemBase-DuWKD7l0.js";import"./ItemLink-Cz_W1z7X.js";import"./SettingsModal-C32hC9f4.js";import"./ModalBody-ClYSa-ii.js";import"./ButtonIcon-DJjLAXS2.js";import"./ButtonLabel-s3GO9UyL.js";import"./AccountOrganization-C392X_av.js";import"./Byline-D1JKn8Co.js";const Bt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(c,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(l,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const It=["Default","Expanded"];export{r as Default,i as Expanded,It as __namedExportsOrder,Bt as default};
