import{j as t}from"./iframe-C6Awlou2.js";import{S as o}from"./Handshake-DQQBCAG4.js";import{S as e}from"./Bell-Di_o_g2Z.js";import{S as s}from"./Hashtag-DBcmbKAx.js";import{S as n}from"./Files-Hb-ADoK6.js";import{A as p}from"./AccountListItem-24BPZEz5.js";import{L as m}from"./List-BRK8Eu__.js";import{A as l}from"./AccountListItemDetails-CPODXGV5.js";import{B as c}from"./Button-xDUaTd0f.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-InpKFtFj.js";import"./ListItem-B4a0Y9mW.js";import"./index-DlBZqmFk.js";import"./Input-DYyIZxUH.js";import"./tooltip-wBWP-9p3.js";import"./XMark-BEbAfGHw.js";import"./Icon-DNxmTYNY.js";import"./Skeleton-Dzw9idTE.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./ChevronUp-CFyLtqTc.js";import"./ChevronDown-BaaUSGet.js";import"./ChevronRight-BPFGJ1iV.js";import"./HeartFill-Dg_CH6Vp.js";import"./ContextMenu-Bd4hTYBx.js";import"./useDropdownMenuController-lE7_h4w8.js";import"./Dropdown-A06NMf9H.js";import"./MenuElipsisHorizontal-DVK_g9_l.js";import"./SearchField-BUnYpq_7.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./Label-C48-SpFn.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Checkmark-dLQcEakJ.js";import"./ItemControls-vVSkFb-5.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";import"./Flex-CdwLgxBs.js";import"./Section-Bo2XNiOH.js";import"./ButtonGroup-wXquxLDR.js";import"./Divider-Dv9ZwaQV.js";import"./SettingsItem-D7LwPX9z.js";import"./SettingsItemBase-XUMRuJ8B.js";import"./ItemLink-sxVrkQm-.js";import"./SettingsModal-D4o6h_BN.js";import"./ModalBody-B_QH7FJE.js";import"./ButtonIcon-CsIFcTMm.js";import"./ButtonLabel-DV3CS5lX.js";import"./AccountOrganization-DBHg4RUv.js";import"./Byline-BNoBNYMp.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(m,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
