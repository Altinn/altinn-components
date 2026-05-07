import{j as t}from"./iframe-Cqj3AiBb.js";import{S as a}from"./Handshake-CkUVyW6g.js";import{S as e}from"./Bell-BFrIV75G.js";import{S as s}from"./Hashtag-BkjdlspC.js";import{S as n}from"./Files-Bp7HCD3v.js";import{A as p}from"./AccountListItem-CsWzS8D2.js";import{L as m}from"./List-kmWDlagH.js";import{A as l}from"./AccountListItemDetails-B8aKFa2h.js";import{B as c}from"./Button-DYwdzfZG.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bi-DL88I.js";import"./ListItem-cfHlhQru.js";import"./index-CHG1hv9Q.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./lite-DaUVFjkg.js";import"./XMark-ReENydG3.js";import"./Icon-CHi77IUK.js";import"./Skeleton-B33vAz-c.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CZYKnUm1.js";import"./Heading-CJiOkJPI.js";import"./useHighlightedText-Cyl54eZj.js";import"./ChevronUp-BaSPXXxx.js";import"./ChevronDown-g18mW4eX.js";import"./ChevronRight-CxmxTIkT.js";import"./HeartFill-DCHu72W2.js";import"./ContextMenu-DvzTTWGt.js";import"./useDropdownMenuController-DF4yQiJ_.js";import"./Dropdown-Cx7yQmcU.js";import"./MenuElipsisHorizontal-DNpXF7Es.js";import"./SearchField-qenOIdRZ.js";import"./MagnifyingGlass-fMCV_alc.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./Checkmark-BFwQvgMU.js";import"./ItemControls-eJMUKPOH.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./Flex-DFnlILDc.js";import"./Section-BsXiOSXS.js";import"./ButtonGroup-HmC79Nv3.js";import"./Divider-Dh6Z2_Iw.js";import"./SettingsItem-4Dc5iI0g.js";import"./SettingsItemBase-B6HYWitJ.js";import"./ItemLink-Bkhdk8v_.js";import"./SettingsModal-B16xHKIZ.js";import"./ModalBody-jsg5kTGr.js";import"./ButtonIcon-CRk-Fq7D.js";import"./ButtonLabel-BBQgFKVt.js";import"./AccountOrganization-BNzlb7Zn.js";import"./Byline-BT_6GGpj.js";import"./button-CcZ_KMhQ.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
