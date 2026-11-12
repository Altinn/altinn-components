var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a7 as t,c as p}from"./iframe-xlSYDLmX.js";import{S as l}from"./Handshake-B79_xA5Z.js";import{S as a}from"./Bell-1X4Q-x_J.js";import{S as m}from"./Hashtag-J9RB5cWW.js";import{S as c}from"./Files-Ck40F7-a.js";import{A as g}from"./AccountListItem-BAMi-GXz.js";import{A as d}from"./AccountListItemDetails-BbfsfT20.js";import{L as u}from"./List-4DslVlnz.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-B7QDJ_pJ.js";import"./Input-r4bRN1Qy.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ChevronUp-SNqOJLK8.js";import"./ChevronDown-BV4f9W92.js";import"./ChevronRight-WLOtysjI.js";import"./HeartFill-BXqiREJy.js";import"./ContextMenu-DIOKC6O7.js";import"./useDropdownMenuController-DGUZzvC0.js";import"./useIsDesktop-6yxnkXHf.js";import"./Dropdown-CsBuGo6i.js";import"./SearchField-Cm1bebf2.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./MenuListItem-C1VHk2tM.js";import"./MenuListDivider-B_1so_ti.js";import"./MenuItem-BLhJ1hxZ.js";import"./CheckboxUncheckedIcon-DH-Lidl1.js";import"./RadioUncheckedIcon-C7ew2nKt.js";import"./ItemMedia-DF0c3SDh.js";import"./ItemLabel-eTSb-Z0L.js";import"./ItemControls-Dlw9_sua.js";import"./FieldBase-CKEKDcDW.js";import"./Typography-CBKRdQ-b.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./useMenu-C7Dhr05-.js";import"./InformationSquare-DlLj2oH8.js";import"./Section-Dg4Yy1fe.js";import"./Flex-Brl5o9wf.js";import"./ButtonGroup-CmZy2FTH.js";import"./Divider-DywCGJJG.js";import"./SettingsItem-Bdv_RkCz.js";import"./SettingsItemBase-CebRWWIM.js";import"./ItemBase-D6wd74Ed.js";import"./ItemLink-DzpDCAH4.js";import"./SettingsModal-C1-SabfD.js";import"./ModalBody-2B3xwQox.js";import"./ButtonIcon-C0Iduzzq.js";import"./ButtonLabel-DtsaJMNL.js";import"./AccountOrganization-CjagZoKO.js";import"./Byline-lo6AH7M_.js";const bt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},Xt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,Xt as __namedExportsOrder,bt as default};
