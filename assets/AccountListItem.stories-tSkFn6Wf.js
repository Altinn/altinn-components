import{j as t}from"./iframe-CU9tIbvZ.js";import{S as a}from"./Handshake-OFrhfzK2.js";import{S as e}from"./Bell-d_XnJlp6.js";import{S as s}from"./Hashtag-BkcOLnqQ.js";import{S as n}from"./Files-Cg7iDgIU.js";import{A as p}from"./AccountListItem-COwsaiJO.js";import{L as m}from"./List-CmEHIyyJ.js";import{A as l}from"./AccountListItemDetails-BzhWhpqc.js";import{B as c}from"./Button-DwluG-LJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BEikXtHv.js";import"./ListItem-CfMUAyha.js";import"./index-Bd_n44R2.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./lite-DaUVFjkg.js";import"./XMark-DTYd927G.js";import"./Icon-BBvHNxu7.js";import"./Skeleton-WB8_C3gk.js";import"./Avatar-CPYUWVLR.js";import"./AvatarGroup-D82OEK4D.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BZYQG8M3.js";import"./Heading-DKJvmFhb.js";import"./useHighlightedText-okRrJvjD.js";import"./ChevronUp-C9A9ysE-.js";import"./ChevronDown-D1kreZKO.js";import"./ChevronRight-XlyxhDjC.js";import"./HeartFill-XWsxyGDr.js";import"./ContextMenu-CYUHBwBA.js";import"./useDropdownMenuController-DyTNGBZv.js";import"./Dropdown-DgULA5TZ.js";import"./MenuElipsisHorizontal-sU1biIaO.js";import"./SearchField-CWeqUa0W.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./FieldBase-Bc5lvX-i.js";import"./Typography-w6SEqUo0.js";import"./Label-BURQuXSo.js";import"./index-ByNurdCO.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuListHeading-kMHXlGu4.js";import"./MenuItem-B01BWq_H.js";import"./ItemMedia-DuuCC0AM.js";import"./Checkmark-DOBFSC3X.js";import"./ItemControls-BgF8Asgd.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./InformationSquare-Dq6QQdGV.js";import"./Flex-Aa4xg00u.js";import"./Section-BozmV6Om.js";import"./ButtonGroup-Bc7spR1E.js";import"./Divider-DZU-0-lX.js";import"./SettingsItem-DCTzcNFp.js";import"./SettingsItemBase-Doj18tTe.js";import"./ItemLink-FRejQ3nm.js";import"./SettingsModal-KtnV1Bjh.js";import"./ModalBody-c-JjnOdb.js";import"./ButtonIcon-DRnipxiZ.js";import"./ButtonLabel-ChcktKem.js";import"./AccountOrganization-RqLnSMpe.js";import"./Byline-Bqw1wwsS.js";import"./button-DfPuT9nv.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
