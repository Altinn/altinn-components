import{a7 as t,c as o}from"./iframe-BidFzEoe.js";import{S as s}from"./Handshake-RDuxyQx9.js";import{S as e}from"./Bell-CYgg4XJj.js";import{S as n}from"./Hashtag-3JBEfhDM.js";import{S as p}from"./Files-yXDRDIo-.js";import{A as l}from"./AccountListItem-DLFXi4z6.js";import{A as m}from"./AccountListItemDetails-rp41IBKJ.js";import{L as c}from"./List-Ct336t9y.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CBUxCLcG.js";import"./Input-D8eTVnZO.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./Heading-XBMlN0kz.js";import"./useHighlightedText-B2dzt3_l.js";import"./ChevronUp-CbJE0St5.js";import"./ChevronDown-7vjdyvrh.js";import"./ChevronRight-B3flyXKQ.js";import"./HeartFill-Cfr6L_PQ.js";import"./ContextMenu-Cdisi90L.js";import"./useDropdownMenuController-Bpv270d-.js";import"./Dropdown-BZ5Wwg_Y.js";import"./SearchField-CPTH-dMf.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./FieldBase-q2Ok1lDz.js";import"./Typography-BKRo6hXJ.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./useMenu-BgtGmMWX.js";import"./MenuListItem-DeTWeA9p.js";import"./MenuListDivider-2FWQFBqh.js";import"./MenuListHeading-C3S-0AcD.js";import"./MenuItem-YZR9Jx1u.js";import"./ItemMedia-DzAOMVpV.js";import"./Checkmark-DMx9NJHb.js";import"./ItemLabel-NxjhrgwT.js";import"./ItemControls-5057Wt3J.js";import"./InformationSquare-B1R5HfkF.js";import"./MenuElipsisHorizontal-BhNI2fK5.js";import"./Section-D00_D8ux.js";import"./Flex-BXtaAm49.js";import"./ButtonGroup-BDN4dAIH.js";import"./Divider-Ckx4bjrf.js";import"./SettingsItem-wCIm7MUu.js";import"./SettingsItemBase-CtYPnu_3.js";import"./ItemBase-mIr4q6rQ.js";import"./ItemLink-C3ysbGvA.js";import"./SettingsModal-Lyf15yKp.js";import"./ModalBody-BGmAjdb1.js";import"./ButtonIcon-BtY_BXUj.js";import"./ButtonLabel-ym8yEuVp.js";import"./AccountOrganization-DL8vt4oF.js";import"./Byline-BxuosFas.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
