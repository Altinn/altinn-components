import{j as t}from"./iframe-0B_Yudin.js";import{S as a}from"./Handshake-Cl9TmS0e.js";import{S as e}from"./Bell-I9jdyPhB.js";import{S as s}from"./Hashtag-BwFWabg8.js";import{S as n}from"./Files-BJMam6eS.js";import{A as p}from"./AccountListItem-DaJV6-KH.js";import{L as m}from"./List-BxubJ1l7.js";import{A as l}from"./AccountListItemDetails-D8YjSEjW.js";import{B as c}from"./Button-CFVlP8iN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BUxMg0Ir.js";import"./ListItem-DnHiZFTT.js";import"./index-bzqtFzN_.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./lite-DaUVFjkg.js";import"./XMark-4vnuAWTz.js";import"./Icon-CbCRlB_g.js";import"./Skeleton-CCW5QxrE.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-ymJsCjoB.js";import"./Heading-iCNnL7gN.js";import"./useHighlightedText-1P3axs8E.js";import"./ChevronUp-CRY6Xdys.js";import"./ChevronDown-DyrNm3cx.js";import"./ChevronRight-D1gjYegd.js";import"./HeartFill-B029Znip.js";import"./ContextMenu-CnWikKRV.js";import"./useDropdownMenuController-B1mLRZqh.js";import"./Dropdown-Ceu59hlm.js";import"./MenuElipsisHorizontal-Brw3IxFk.js";import"./SearchField-aP7iZ-N9.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./FieldBase-BRRzaSEH.js";import"./Typography-WSorE15D.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./Checkmark-BmAdxrUQ.js";import"./ItemControls-DGPFdAX4.js";import"./useMenu-G8FOBFFN.js";import"./InformationSquare-C3Az81Rf.js";import"./Flex-CcsVAtXA.js";import"./Section-byNAOZ7t.js";import"./ButtonGroup-CSUZvsoD.js";import"./Divider-DZtdoQqC.js";import"./SettingsItem-B8uJVMUB.js";import"./SettingsItemBase-CPL8qCc4.js";import"./ItemLink-BmeT6DsA.js";import"./SettingsModal-D9Bwsf9R.js";import"./ModalBody-lU1YKfiD.js";import"./ButtonIcon-C8wYqRVe.js";import"./ButtonLabel-DvXULbxc.js";import"./AccountOrganization-BzBMba1E.js";import"./Byline-C3mhaQKv.js";import"./button-B4QTcVhB.js";const Dt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
