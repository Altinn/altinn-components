import{j as t}from"./iframe-BakMcPB9.js";import{S as a}from"./Handshake-o57mC6p5.js";import{S as e}from"./Bell-DBsUPEGE.js";import{S as s}from"./Hashtag-Dpa1Lvb6.js";import{S as n}from"./Files-BpQrWYUC.js";import{A as p}from"./AccountListItem-DdZItRrG.js";import{L as m}from"./List-BrkjmLNt.js";import{A as l}from"./AccountListItemDetails-DQDyZ81W.js";import{B as c}from"./Button-BJ-P2q8B.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Btw-Kuqp.js";import"./ListItem-xf55yvbN.js";import"./index-DAwqyEdM.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./lite-DaUVFjkg.js";import"./XMark-D8cLqedS.js";import"./Icon-D4ysQTre.js";import"./Skeleton-CIZGLt5B.js";import"./Avatar-bwZt4czp.js";import"./AvatarGroup-DgPgqKip.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CJ9f1t94.js";import"./Heading-Dpm-6zaj.js";import"./useHighlightedText-nzhiVGnc.js";import"./ChevronUp-D-5UFsw8.js";import"./ChevronDown-DMRBxZop.js";import"./ChevronRight-C2TalX8u.js";import"./HeartFill-C97JobCu.js";import"./ContextMenu-z94PUUNE.js";import"./useDropdownMenuController-CClYSj1T.js";import"./Dropdown-UmxICHKp.js";import"./MenuElipsisHorizontal-554EG_sf.js";import"./SearchField-rHpPiKo0.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./FieldBase-B35pktZu.js";import"./Typography-BzplxmiV.js";import"./Label-D58ijrT7.js";import"./index-Dmny_mDx.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuListHeading-BYFBzopx.js";import"./MenuItem-DOoZvP8c.js";import"./ItemMedia-CMtvzv_T.js";import"./Checkmark-Bv6xEUnW.js";import"./ItemControls-BIaUvdXD.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";import"./Flex-73Lku4Kd.js";import"./Section-C3ywv7P2.js";import"./ButtonGroup-4RnrqVmD.js";import"./Divider-Hrvd7glH.js";import"./SettingsItem-CKPRUPv9.js";import"./SettingsItemBase-CgS3639z.js";import"./ItemLink-Dn0iTF8z.js";import"./SettingsModal-CxuQHGWI.js";import"./ModalBody-BH-DS5mt.js";import"./ButtonIcon-boAFcVxG.js";import"./ButtonLabel-BvF3ABNB.js";import"./AccountOrganization-DLyl2Ifk.js";import"./Byline-BaThz4WY.js";import"./button-Dqq-cscz.js";const Dt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ft=["Default","Expanded"];export{r as Default,i as Expanded,ft as __namedExportsOrder,Dt as default};
