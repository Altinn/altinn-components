import{a7 as t,c as o}from"./iframe-CfUrJ-sW.js";import{S as s}from"./Handshake-95ovmipE.js";import{S as e}from"./Bell-jLloubcj.js";import{S as n}from"./Hashtag-DBbJzRLu.js";import{S as p}from"./Files-CZZZVXTz.js";import{A as l}from"./AccountListItem-LL3EE9Zu.js";import{A as m}from"./AccountListItemDetails-CaUQBvQP.js";import{L as c}from"./List-B6WSzlp9.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CUELnJv9.js";import"./Input-CJlrdXWO.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./Heading-CC1NzZuf.js";import"./useHighlightedText-DCiIYobu.js";import"./ChevronUp-rhZxrOkp.js";import"./ChevronDown-BqQbWOs1.js";import"./ChevronRight-BQqjok9o.js";import"./HeartFill-C9PtCQcp.js";import"./ContextMenu-NIUZQkjq.js";import"./useDropdownMenuController-BagG9o2A.js";import"./Dropdown-Dwhf6SNg.js";import"./SearchField-D230b6Yn.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./FieldBase-CrwLGD3E.js";import"./Typography-CAlmT_0b.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./useMenu-VNE_nv00.js";import"./MenuListItem-CpLdOTrv.js";import"./MenuListDivider-BCZC89qs.js";import"./MenuListHeading-C_KnsA5D.js";import"./MenuItem-Dw5geetP.js";import"./ItemMedia-BbdQksB6.js";import"./Checkmark-8dE5LNjt.js";import"./ItemLabel-7ZtyJqf1.js";import"./ItemControls-K0n5tZKI.js";import"./InformationSquare-BZJWkHLO.js";import"./MenuElipsisHorizontal-DNQyfiZ2.js";import"./Section-CnfuXcY3.js";import"./Flex-DpzfZDgd.js";import"./ButtonGroup-9eoCQEvr.js";import"./Divider-BiOZvEKa.js";import"./SettingsItem-D1pTpu0M.js";import"./SettingsItemBase-t0GeXdqv.js";import"./ItemBase-CCya3J9r.js";import"./ItemLink-_OyNsa5a.js";import"./SettingsModal-C0lARV3s.js";import"./ModalBody-BTkCYeJ8.js";import"./ButtonIcon-CzpTDJ2F.js";import"./ButtonLabel-ChaENXy3.js";import"./AccountOrganization-BUDIErg7.js";import"./Byline-DTKA3ETf.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
