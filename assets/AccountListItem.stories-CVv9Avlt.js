import{a7 as t,c as o}from"./iframe-Dr1YYpI1.js";import{S as s}from"./Handshake-CUkXaT2a.js";import{S as e}from"./Bell-Dde6-Gi2.js";import{S as n}from"./Hashtag-CREx4K6b.js";import{S as p}from"./Files-CTNBGO6Z.js";import{A as m}from"./AccountListItem-DozPrSIz.js";import{A as l}from"./AccountListItemDetails-CJWJ_IQy.js";import{L as c}from"./List-Bd354_V5.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-BNw8VTGu.js";import"./Input-Brt0jiez.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./Heading-BD9oLNEa.js";import"./useHighlightedText-BV18x4ez.js";import"./ChevronUp-B_Smx25I.js";import"./ChevronDown-BBfddSx6.js";import"./ChevronRight-F0aXUvpz.js";import"./HeartFill-DvriOPQ7.js";import"./ContextMenu-DFPb-mjt.js";import"./useDropdownMenuController-lfZpt0cM.js";import"./Dropdown-CkHQtX7v.js";import"./SearchField-Cir7dqyx.js";import"./MagnifyingGlass-DOqx6Pwx.js";import"./FieldBase-CyLGbTYK.js";import"./Typography-CAIidHgh.js";import"./Field-CFwGDJPk.js";import"./Label-CGK745vw.js";import"./useMenu-BbXnEU1n.js";import"./MenuListItem-BFvVa6a8.js";import"./MenuListDivider-DIxbGzVU.js";import"./MenuListHeading-BfYNlaNe.js";import"./MenuItem-CTIXytBa.js";import"./ItemMedia-BpxSm7tv.js";import"./Checkmark-BLry8rVn.js";import"./ItemLabel-CM1gzuiQ.js";import"./ItemControls-DQl8k1jC.js";import"./index-CjeWyC4B.js";import"./InformationSquare-zR3kX6_5.js";import"./MenuElipsisHorizontal-DtCz34LC.js";import"./Section-_zPAIWIf.js";import"./Flex-DPnodwFD.js";import"./ButtonGroup-B0d19ndD.js";import"./Divider-BgkgspeO.js";import"./SettingsItem-BbYm3dAF.js";import"./SettingsItemBase-DQ4J7FZj.js";import"./ItemBase-0lWwxmT3.js";import"./ItemLink-DdXuuqzx.js";import"./SettingsModal-rGIq4aQc.js";import"./ModalBody-F3dsMu5Q.js";import"./ButtonIcon-Bf7UK4aY.js";import"./ButtonLabel-Bo8mZTJ3.js";import"./AccountOrganization-fcs5XP53.js";import"./Byline-ClFKTn_e.js";const ut={title:"Account/AccountListItem",component:m,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vt=["Default","Expanded"];export{r as Default,i as Expanded,vt as __namedExportsOrder,ut as default};
