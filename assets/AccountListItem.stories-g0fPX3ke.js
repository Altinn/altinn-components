import{j as t}from"./iframe-aFNUvxii.js";import{S as a}from"./Handshake-D1PKeBcJ.js";import{S as e}from"./Bell-BRZN0HEA.js";import{S as s}from"./Hashtag-7Av7E_Zv.js";import{S as n}from"./Files-DINLMFue.js";import{A as p}from"./AccountListItem-B64fupDq.js";import{L as m}from"./List-BFyaa2z4.js";import{A as l}from"./AccountListItemDetails-B5boRbiT.js";import{B as c}from"./Button-cD6HSwip.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-W_OLMGMd.js";import"./ListItem-BlzUsJv5.js";import"./index-DmNdTbFH.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./lite-DaUVFjkg.js";import"./XMark-BNsj9R6R.js";import"./Icon-DC5Qp50u.js";import"./Skeleton-Cd5GNeeI.js";import"./Avatar-DUHlMNex.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C-1ExRDf.js";import"./Heading-F0__TKrp.js";import"./useHighlightedText-DGtjyph8.js";import"./ChevronUp-DqbXbD5l.js";import"./ChevronDown-CHfhU-Uc.js";import"./ChevronRight-B0RIPM-U.js";import"./HeartFill-DlkEo-n7.js";import"./ContextMenu-Q0cpQIs-.js";import"./useDropdownMenuController-MoNgRnPR.js";import"./Dropdown-C8yUJUHT.js";import"./MenuElipsisHorizontal-BORchHTr.js";import"./SearchField-CnqR4pyv.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./FieldBase-Bx4PyUkS.js";import"./Typography-Co9p8t4Z.js";import"./Label-CFD6MxAu.js";import"./index-BLgLADsA.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuListHeading-Bej_UvLn.js";import"./MenuItem-BFBnyLEl.js";import"./ItemMedia-Di01sVY_.js";import"./Checkmark-CrF1sW3U.js";import"./ItemControls-BgCWQjxP.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";import"./InformationSquare-WTyA5DCk.js";import"./Flex-DARe3czq.js";import"./Section-BIq-JpVN.js";import"./ButtonGroup-Cv-I5W75.js";import"./Divider-BylZJaCS.js";import"./SettingsItem-A7x7oKGc.js";import"./SettingsItemBase-BmExxp2p.js";import"./ItemLink-DcFOssNC.js";import"./SettingsModal-C1pSNUTr.js";import"./ModalBody-D69AqkWD.js";import"./ButtonIcon-DeVYwviE.js";import"./ButtonLabel-BCreAq1S.js";import"./AccountOrganization-Bb_ZDX6d.js";import"./Byline-BtOWHU9J.js";import"./button-CWls7pzR.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
